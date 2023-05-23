import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUserList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }
}
