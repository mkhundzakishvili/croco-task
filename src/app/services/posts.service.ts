import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getUserPosts(id: string) {
    return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  }
}
