import { Component, OnInit } from '@angular/core';
import { PostsApiService } from '../posts-api.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit{
  id: number = -1;
  form: FormGroup;
  constructor( private modalRef: BsModalRef, private formBuilder: FormBuilder, private postService: PostsApiService, private route: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      picture: ['', Validators.required],
      decription: ['', Validators.required],
      detail: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    if(this.id > -1) {
      this.postService.getPosts().subscribe((data) => {
        this.form.patchValue(data[this.id - 1]);
      });
    }
  }

  closeModal() {
    this.modalRef?.hide();
  }

  supmit() {
    if (this.form.valid) {
      if(this.id > -1) {
        this.postService.updatePost(this.form.value, this.id).subscribe((data) => {
          if (data !== null) {
            alert("success");
          } else {
            alert("faid");
          }
        });
      }else {
        this.postService.createPost(this.form.value).subscribe((data) => {
          if (data !== null) {
            alert("success");
          } else {
            alert("faid");
          }
        });
      }
    } else {
      alert("Fill in all fields");
    }
  }
}
