import { Component, OnInit } from '@angular/core';
import { PostsApiService } from 'src/app/http-cient/posts-api.service';
import { UserDataService } from 'src/app/control-data/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  userName: any
  posts: any[] = [];
  constructor( private router: Router, private postService: PostsApiService, private userDataService: UserDataService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      if(data !== null) {
        this.posts = data;
      }else {
        alert("You must log in");
        this.router.navigate(['']);
      }
    });
    this.userName = this.userDataService.getUser()?.username || '';
  }

  logout() {
    this.userDataService.clearUser();
    console.log('Đăng xuất thành công.');
    this.router.navigate(['']);
  }
}
