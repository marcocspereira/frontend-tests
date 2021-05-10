import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpDummyWrapperService {
  constructor(private _httpService: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this._httpService.get<T>(url);
  }
}
