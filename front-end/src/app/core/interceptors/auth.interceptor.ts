// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }

  return next(req);
};

// import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { QuestionsService } from '../services/questions.service'; // Hypothetical incorrect injection

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const questionsService = inject(QuestionsService); // This would cause a circular dependency
//   const token = localStorage.getItem('token');

//   if (token) {
//     const cloned = req.clone({
//       setHeaders: {
//         Authorization: `${token}`,
//       },
//     });
//     return next(cloned);
//   }
//   return next(req);
// };
