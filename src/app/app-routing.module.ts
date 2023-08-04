import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostComponent } from './list-post/list-post.component';
import { ReadPostComponent } from './read-post/read-post.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GuardService } from './guard.service';
import { AdminGuardService } from './admin-guard.service';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuardService] },
  { path: 'home', component: HomeViewComponent,
    children: [
      { path: 'posts', component: ListPostComponent },
      { path: 'posts/:id', component: ReadPostComponent }
      ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
