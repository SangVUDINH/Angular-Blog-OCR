import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-list/post-form/post-form.component';
import { SignupComponent} from './auth/signup/signup.component';
import { SigninComponent} from './auth/signin/signin.component'


import { AuthService} from './services/auth.service';
import { AuthGuardService} from './services/auth-guard.service';
import { PostsService} from './services/posts.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/signin', component: SigninComponent},
  { path: 'posts', canActivate: [AuthGuardService], component: PostListComponent},
  { path: '', redirectTo:'posts', pathMatch:'full'},
  { path: '**', redirectTo:'posts'}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostFormComponent,
    SignupComponent,
    SigninComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuardService, AuthService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
