import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Attaches Authorization header with Bearer token if available in localStorage.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('accessToken');
  console.log('[AuthInterceptor] Token encontrado:', token);

  if (token && !req.headers.has('Authorization')) {
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    console.log('[AuthInterceptor] Header Authorization agregado');
    return next(authReq);
  }
  console.log('[AuthInterceptor] No se agregó header Authorization');
  return next(req);
};