import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthInterceptor } from './http-cient/auth.interceptor';
import { UserDataService } from './control-data/user-data.service';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './component/admin-component/admin.component';

@NgModule({
  declarations: [
    AppComponent,

    AdminComponent
  ],
  imports: [
    PostsModule,
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
