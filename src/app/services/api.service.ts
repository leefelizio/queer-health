import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface APIResponse {
  title: string;
  data: any[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _httpClient: HttpClient) {}

  async getData() {
    // demo headers Angular
    const headers = new HttpHeaders({
      Authorization: 'XXXXXXX',
    })

    // make request http
    const req = this._httpClient.get<APIResponse>('./assets/professionals.json',{headers});
    // extract data with RxJs library operator
    const value = firstValueFrom(req);
    // like the above, value is a promise. If I want the APIResponse
    // so I put the await like const value = await firstValueFrom(req);

    // now we return data ready
    return value;
  }
}
