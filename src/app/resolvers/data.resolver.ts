import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiService } from '../services/api.service';

export const dataResolver: ResolveFn<{
  title: string;
  data: any[];
}> = async () => {
  
  const service = inject(ApiService);
  // use service
  const response = await service.getData();

  return {
    title: response.title,
    data: response.data,
  };
};
