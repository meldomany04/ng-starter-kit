import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/services/core/auth.service.ts';

export const AuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  // if (state.url.includes('signin-oidc')) {
  //   return true;
  // }

  if (auth.isLoggedIn) {
    return true;
  }

  auth.login();
  return false;
};