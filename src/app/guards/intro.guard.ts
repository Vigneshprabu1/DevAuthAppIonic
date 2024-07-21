import { CanActivateFn } from '@angular/router';
export const INTRO_KEY = 'intro-seen';
export const introGuard: CanActivateFn = (route, state) => {
  return true;
};