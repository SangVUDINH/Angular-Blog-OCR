import { Component, OnInit, OnDestroy } from '@angular/core';

import { PostFormComponent } from './post-form/post-form.component';
import { Post } from '../model/post.model';
import { PostsService } from '../services/posts.service';
import * as firebase from 'firebase';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[]=[];
  postsSubscription: Subscription;
 
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {

    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[])=>{
        this.posts= posts;
      });
    
      this.postsService.emitPost();
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }


  addLike(post:Post){
    post.like= post.like+1;
  }

  disLike(post:Post){
    if (post.like >0) post.like= post.like-1;
  }


  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

  onRemovePost(index: number){
    this.postsService.removePost(index);
  }

}
