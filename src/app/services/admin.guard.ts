import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../pages/login/services/login.service';

export const adminGuard: CanActivateFn = (route , state) => {
  const loginService = inject(LoginService);
  
  if(loginService.isLoggedIn() && loginService.getUserRole() === 'ADMIN'){
    return true;
  }else{
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }

  
};
