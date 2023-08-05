import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private apiUrl = 'https://64cdc3270c01d81da3ee43c6.mockapi.io/Users';
  constructor(private http: HttpClient) { }

  apiLogin(user: User): Observable<User | null> {
    console.log(user.id);
    
    return this.http.get<User>(`${this.apiUrl}/${user.id}`)
  }

  apiRegister(user: User): Observable<User | null> {
    return this.http.post<User>(this.apiUrl, user)
  }
}
