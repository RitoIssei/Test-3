import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsApiService } from 'src/app/http-cient/posts-api.service';
import { NewPostComponent } from '../new-post/new-post.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserDataService } from 'src/app/control-data/user-data.service';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.scss']
})
export class ReadPostComponent implements OnInit {
  post: any = {};
  posts: any[] = [];
  constructor(private modalRef: BsModalRef, private modalService: BsModalService, private postService: PostsApiService, private route: ActivatedRoute, private router: Router, private userDataService: UserDataService) { }
  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    if (this.userDataService.getUser() === null) {
      this.router.navigate(['']);
    } else {
      this.postService.getPosts().subscribe((data) => {
        if (data !== null) {
          this.posts = data;
          this.post = data[id - 1];
        } else {
          alert("You must log in");
          this.router.navigate(['']);
        }
      });
    }
  }

  openModal(id: number) {
    this.modalRef = this.modalService.show(NewPostComponent, {
      initialState: {
        id: id
      }
    });

  }
}
