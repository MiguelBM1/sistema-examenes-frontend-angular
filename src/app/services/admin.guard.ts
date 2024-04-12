import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../pages/login/services/login.service';

export const adminGuard: CanActivateFn = (route , state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if(loginService.isLoggedIn() && loginService.getUserRole() === 'ADMIN'){
    return true;
  }

  router.navigate(['/login']);
  loginService.logout();
  return false;
};
