import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Lettore {
  // inject HttpClient to make HTTP requests
  private http: HttpClient = inject(HttpClient);
  public posts = [];
  constructor() {}

  getPostsObservable() {
    return this.http.get<any[]>('http://localhost:3000/posts');
  }
}