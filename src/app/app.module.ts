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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { AddressFormComponent } from './address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card'

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/signin', component: SigninComponent},
  { path: 'posts', canActivate: [AuthGuardService], component: PostListComponent},
  { path: 'posts/new',  component: PostFormComponent},
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
    SigninComponent,
    AddressFormComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [AuthGuardService, AuthService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
