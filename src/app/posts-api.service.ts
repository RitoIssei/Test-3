import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  apiUrl = 'https://64c86153a1fe0128fbd5c827.mockapi.io/post';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return [];
      })
    );
  }

  updatePost(post: any, id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, post).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return of(null);
      })
    );
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return of(null);
      })
    );
  }
}
