import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);
  baseApiUrl: string = 'https://jsonplaceholder.typicode.com';

  getPosts() {
    return this.http.get<Post[]>(`${this.baseApiUrl}/posts`);
  }
}
