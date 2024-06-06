import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IsAuthService } from '../services/auth.service';

// -- there are two parameters that are available: route, state
// -- in this case we dont need it
export const isAuthGuard: CanActivateFn = async() => {
  // -- inject() from Angular to inject Dependencie Services
  // -- use inject() bcause we don't have a constructor since it is a function
  // -- otherwise in a class, xx.component.ts we inject as param in the
  // -- constructor
  const service = inject(IsAuthService);
  const router = inject(Router);
  // -- promise navigateByUrl (async because is a promise)
  // -- tu peux mettre the await before router. but we don't 
  // -- because we want the return to be fast, when the page charges
  // -- redirection below
  if(!await service.isAuth()){
    router.navigateByUrl('/login');
  }
  // -- finally returns a Boolean to make it work
  return await service.isAuth() ;
  // -- Maybe have to 
  // const booleanIsAuth = await service.isAuth();
  // const angularRouteUpdate = RedirectCommand(inject(Router).parseUrl('./'),{skipLocationChange}) /* something else*/;
  // return booleanIsAuth ? true : angularRouteUpdate;
};
