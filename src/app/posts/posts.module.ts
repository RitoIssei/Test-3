import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPostComponent } from './home-component/list-post/list-post.component';
import { NewPostComponent } from './home-component/new-post/new-post.component';
import { ReadPostComponent } from './home-component/read-post/read-post.component';
import { HomeViewComponent } from './home-component/home-view.component';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ListPostComponent,
    NewPostComponent,
    ReadPostComponent,
    HomeViewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbCollapseModule
  ]
})
export class PostsModule { }
