import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthInterceptor } from './http-cient/auth.interceptor';
import { UserDataService } from './control-data/user-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostComponent } from './component/home-component/list-post/list-post.component';
import { NewPostComponent } from './component/home-component/new-post/new-post.component';
import { ReadPostComponent } from './component/home-component/read-post/read-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './component/login-component/sign-in.component';
import { HomeViewComponent } from './component/home-component/home-view.component';
import { AdminComponent } from './component/admin-component/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostComponent,
    NewPostComponent,
    ReadPostComponent,
    SignInComponent,
    HomeViewComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    UserDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
