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
