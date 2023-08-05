import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../app.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  apiUrl = 'https://64c86153a1fe0128fbd5c827.mockapi.io/post';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    console.log(this.http);
    return this.http.get<Post[]>(this.apiUrl)
  }

  updatePost(post: Post, id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, post)
  }

  createPost(post: Post): Observable<any> {
    return this.http.post<any>(this.apiUrl, post)
  }
}
