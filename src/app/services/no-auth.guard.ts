import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../pages/login/services/login.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if(!loginService.isLoggedIn()){
    return true;
  }else{
    router.navigate(['/admin']);
    return false;
  }
};
