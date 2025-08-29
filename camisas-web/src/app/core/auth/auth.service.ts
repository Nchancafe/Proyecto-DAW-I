import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError, switchMap, of, catchError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthUtils} from './auth.utils';

interface UserData {
  roles: string[];
  name: string;
  sub: string;
  iat: number;
  exp: number;
}

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

    return this._httpClient.post(`${this.baseUrl}/public/api/auth/login`, credentials).pipe(
      switchMap((response: any) => {
        this.accessToken = response.accessToken;
        this.refreshToken = response.refreshToken;
        this._authenticated = true;
        this.startTokenRefreshTimer();
        return of(response);
      }),
    );
  }

  /**
   * Refresh the access token using the refresh token
   */
  refreshAccessToken(): Observable<any> {
    // If no refresh token is available, we cannot refresh the access token
    if (!this.refreshToken) {
      return throwError(() => new Error('Refresh token no disponible'));
    }

    return this._httpClient
      .post(`${this.baseUrl}/public/api/auth/refresh`, {refreshToken: this.refreshToken})
      .pipe(
        switchMap((response: any) => {
          // Update the access token and return the response
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
    // Remove the access token and refresh token from local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Set the authenticated flag to false
    this._authenticated = false;
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }

    return of(true);
  }

  /**
   * Check the authentication status
   */
  check(): Observable<boolean> {
    // Check if the user is logged in
    if (this._authenticated) {
      return of(true);
    }

    // Check if the access token is expired
    if (AuthUtils.isTokenExpired(this.accessToken, 10)) {
      return this.refreshAccessToken().pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
    }

    // Check if the access token exists and is valid
    if (!this.accessToken) {
      return of(false);
    }

    return of(true);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ User Data Methods - NUEVOS MÉTODOS AGREGADOS
  // -----------------------------------------------------------------------------------------------------

  /**
   * Decodificar JWT manualmente
   */
  private decodeJWT(token: string): UserData | null {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      return JSON.parse(decodedPayload);
    } catch (error) {
      console.error('Error decodificando JWT:', error);
      return null;
    }
  }

  /**
   * Obtener datos del usuario desde el token
   */
  getUserFromToken(): UserData | null {
    const token = this.accessToken;
    if (token) {
      return this.decodeJWT(token);
    }
    return null;
  }

  /**
   * Obtener nombre del usuario
   */
  getUserName(): string {
    const userData = this.getUserFromToken();
    return userData?.name || userData?.sub || 'Usuario';
  }

  /**
   * Obtener rol principal del usuario
   */
  getUserRole(): string {
    const userData = this.getUserFromToken();
    if (!userData?.roles || userData.roles.length === 0) {
      return 'Usuario';
    }

    // Mapear roles a nombres más amigables
    const roleMap: { [key: string]: string } = {
      'ADMIN': 'Administrador',
      'RRHH': 'Recursos Humanos',
      'USER': 'Usuario',
      'MANAGER': 'Gerente'
    };

    return roleMap[userData.roles[0]] || userData.roles[0];
  }

  /**
   * Generar iniciales del nombre
   */
  getUserInitials(): string {
    const name = this.getUserName();
    if (!name) return 'U';

    const words = name.split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  /**
   * Obtener todos los roles del usuario
   */
  getUserRoles(): string[] {
    const userData = this.getUserFromToken();
    return userData?.roles || [];
  }

  /**
   * Verificar si el usuario tiene un rol específico
   */
  hasRole(role: string): boolean {
    const roles = this.getUserRoles();
    return roles.includes(role);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Start the timer that will refresh the token 10 seconds before expiration
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
