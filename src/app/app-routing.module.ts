import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostComponent } from './component/home-component/list-post/list-post.component';
import { ReadPostComponent } from './component/home-component/read-post/read-post.component';
import { HomeViewComponent } from './component/home-component/home-view.component';
import { SignInComponent } from './component/login-component/sign-in.component';
import { GuardService } from './gaurd/guard.service';
import { AdminGuardService } from './gaurd/admin-guard.service';
import { AdminComponent } from './component/admin-component/admin.component';


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
