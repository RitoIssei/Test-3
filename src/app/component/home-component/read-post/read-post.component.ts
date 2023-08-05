import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsApiService } from 'src/app/http-cient/posts-api.service';
import { NewPostComponent } from '../new-post/new-post.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.scss']
})
export class ReadPostComponent implements OnInit {
  post: any = {};
  constructor(private modalRef: BsModalRef, private modalService: BsModalService, private postService: PostsApiService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    const id:number = this.route.snapshot.params['id'];
    this.postService.getPosts().subscribe((data) => {
      this.post = data[id - 1];
    });
  }

  openModal(id: number) {
    this.modalRef = this.modalService.show(NewPostComponent, {
      initialState: {
        id: id
      }
    });
  }
}
