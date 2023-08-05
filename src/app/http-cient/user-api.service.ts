import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private apiUrl = 'https://example.com/api/users';
  constructor(private http: HttpClient) { }

  apiLogin(user: User): Observable<User | null> {
    return this.http.post<User>(this.apiUrl, user)
  }

  apiRegister(user: User): Observable<User | null> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<User>(url, user)
  }
}
