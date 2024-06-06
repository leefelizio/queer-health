import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiService } from '../services/api.service';
import { IsAuthService } from '../services/auth.service';

export const dataResolver: ResolveFn<{
  title: string;
  data: any[];
}> = async () => {
  
  // -- to do - fix -- adding anonym auth
  // const auth = inject(IsAuthService);
  // const user = await auth.signInAnonymously();

  // inject service
  const service = inject(ApiService);
  // use service
  const response = await service.getData();

  // return formated data
  return {
    title: response.title,
    data: response.data,
  };
};
