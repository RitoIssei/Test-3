import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserDataService } from '../control-data/user-data.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userDataService: UserDataService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token = this.userDataService.getUser()?.token;
    
    if (token) {
      console.log(token);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        alert("faid");
        return of(null)
      })
    );
  }
}
