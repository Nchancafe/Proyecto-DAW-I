import {inject, Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError, switchMap, of, catchError , timeout} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthUtils} from './auth.utils';

@Injectable({providedIn: 'root'})
export class AuthService {
  private _authenticated: boolean = false;
  readonly _httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;
  private refreshTimer: any;

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  /**
   * Setter & getter for refresh token
   */
  set refreshToken(token: string) {
    localStorage.setItem('refreshToken', token);
  }

  get refreshToken(): string {
    return localStorage.getItem('refreshToken') ?? '';
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   *
   * @param credentials
   */

  signIn(credentials: { username: string; password: string }): Observable<any> {
  if (this._authenticated) {
    return throwError(() => new Error('El usuario ya ha iniciado sesión.'));
  }

  return this._httpClient
  .post(`${this.baseUrl}/public/api/auth/login`, credentials)
  .pipe(
    switchMap((response: any) => {
      // Soportar diferentes nombres de campos
      const tokens = response.data ?? response;
      this.accessToken =
        tokens.accessToken ?? tokens.access_token ?? tokens.token;
      this.refreshToken =
        tokens.refreshToken ?? tokens.refresh_token ?? '';

      if (!this.accessToken) {
        return throwError(() => new Error('No se recibió token válido'));
      }

      this._authenticated = true;
      this.startTokenRefreshTimer();

      return of(tokens); 
    }),
    catchError((err: HttpErrorResponse) => {
        const backendMsg =
          (err.error && (err.error.message || err.error.error)) ||
          (typeof err.error === 'string' ? err.error : null);

        const msg = backendMsg || 'Autenticación fallida';
        return throwError(() => new Error(msg));
      })
  );
}

  /**
   * Refrescar el token
   */
  refreshAccessToken(): Observable<any> {
 
    if (!this.refreshToken) {
      return throwError(() => new Error('Refresh token no disponible'));
    }

    return this._httpClient
      .post(`${this.baseUrl}/public/api/auth/refresh`, {refreshToken: this.refreshToken})
      .pipe(
        timeout(10000),
        switchMap((response: any) => {
          this.accessToken = response.data.accessToken;
          this.refreshToken = response.data.refreshToken;
          this.startTokenRefreshTimer();
          return of(response.data);
        })
      );
  }

  /**
   * Sign out
   */
  signOut(): Observable<any> {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Setear autenticacion a false
    this._authenticated = false;
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }

    return of(true);
  }

  /**
   * Checkear el status de la autenticacion
   */
  check(): Observable<boolean> {
    // Check if the user is logged in
    if (this._authenticated) {
      return of(true);
    }

    // Checkear si el token expiro
    if (AuthUtils.isTokenExpired(this.accessToken, 10)) {
      return this.refreshAccessToken().pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
    }

    if (!this.accessToken) {
      return of(false);
    }

    return of(true);
  }

  /**
   * Empezar el timer que refrescará el token 10 seg antes de que expire
   */
  private startTokenRefreshTimer(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }

    const timeUntilExpiry = AuthUtils.getTimeUntilTokenExpires(this.accessToken, 10);
    if (timeUntilExpiry > 0) {
      this.refreshTimer = setTimeout(() => {
        this.refreshAccessToken().subscribe({
          error: (error) => {
            console.error('Error renovando token:', error);
          }
        });
      }, timeUntilExpiry);
    }
  }

}
