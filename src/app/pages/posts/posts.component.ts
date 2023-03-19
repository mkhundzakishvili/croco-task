import {Component, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  userId: string;

  constructor(private postService: PostsService, private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
    this.postService.getUserPosts(this.userId).subscribe(data => {
      this.posts = data;
    });
  }
}
