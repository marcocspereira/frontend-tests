import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/**
 * Dummy class that uses session storage to handle dummy data
 */
export class DataService {
  constructor() {}

  persistItem(key: string, data: any): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string) {
    return sessionStorage.getItem(key);
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  reset() {
    sessionStorage.clear();
  }
}
