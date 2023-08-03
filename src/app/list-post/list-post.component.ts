import { Component, OnInit } from '@angular/core';
import { PostsApiService } from '../posts-api.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  posts: any[] = [];
  constructor(private postService: PostsApiService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

}
