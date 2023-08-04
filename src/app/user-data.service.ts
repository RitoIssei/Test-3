import { Injectable } from '@angular/core';
import { User } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  setUser(user: object): void {
    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
  }

  getUser(): User | null {
    const userJSON = localStorage.getItem('user')
    if (userJSON) {
      return JSON.parse(userJSON);
    } else {
      return null;
    }
  }

  clearUser(): void {
    localStorage.removeItem('user');
  }
  
}
