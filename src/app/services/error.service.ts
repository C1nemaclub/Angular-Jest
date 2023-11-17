import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  // private httpClient = inject(HttpClient);
  constructor(private httpClient: HttpClient) {}
  handleError(type: string, error: string): void {
    this.httpClient
      .post<any>('http://localhost:8080/error', { error })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
