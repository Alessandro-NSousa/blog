import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> { // Defina o tipo de retorno como Observable<Post[]>
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  postMensagem(post: Post): Observable<Post>{
    return this.http.post<Post>('http://localhost:3000/posts', post)
  }
}
