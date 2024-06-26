import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../pages/login/services/login.service';
import { inject } from '@angular/core';

export const normalGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggedIn() && loginService.getUserRole() === 'NORMAL') {
    return true;
  }
  router.navigate(['/login']);
  loginService.logout();
  return false;
};
