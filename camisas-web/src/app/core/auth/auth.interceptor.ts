import { HttpInterceptorFn } from '@angular/common/http';

const authFreePaths = [
  '/auth/login',
  '/auth/register',
  '/auth/refresh',
  '/public/api/auth/login'
];

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