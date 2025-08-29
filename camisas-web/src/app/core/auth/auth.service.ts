import {inject, Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError, switchMap, of, catchError , timeout} from 'rxjs';
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

  return this._httpClient
  .post(`${this.baseUrl}/public/api/auth/login`, credentials)
  .pipe(
    timeout(10000), //devolver error si el serv no responde en 10 seg
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
           // manejamos estados
      if (err.status === 0) {
        return throwError(() => new Error('No hay conexión con el servidor'));
      }
      if (err.status === 401 || 403) {
        return throwError(() => new Error('Credenciales inválidas'));
      }

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
