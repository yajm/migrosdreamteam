import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {ApiModule} from '../api.module';

@Injectable({
  providedIn: ApiModule
})
export class MigrosApiService {

  constructor(private http: HttpClient) { }

  get<T>(path: string): Promise<T> {
    return this.http.get<T>(environment.migrosApiUrl + path, {
      headers: {
        Authorization: btoa(`${environment.migrosApiUsername}:${environment.migrosApiPassword}`)
      }
    }).toPromise();
  }
}
