import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // const token = localStorage.getItem('token');
  const token = 'token 123';
  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', token)
    });
    return next(cloned);
  } else {
    return next(req);
  }
}