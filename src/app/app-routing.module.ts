import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostComponent } from './posts/home-component/list-post/list-post.component';
import { ReadPostComponent } from './posts/home-component/read-post/read-post.component';
import { HomeViewComponent } from './posts/home-component/home-view.component';
import { SignInComponent } from './auth/login-component/sign-in.component';
import { GuardService } from './gaurd/guard.service';
import { AdminGuardService } from './gaurd/admin-guard.service';
import { AdminComponent } from './component/admin-component/admin.component';


const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuardService] },
  {
    path: 'home', component: HomeViewComponent,
    children: [
      { path: 'posts', component: ListPostComponent, canActivate: [GuardService] },
      { path: 'posts/:id', component: ReadPostComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
