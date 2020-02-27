import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../model/Post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[]=[];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPost(){
    this.postsSubject.next(this.posts); // multicast to the obsever
  }


  addPost( dataPost: Post){
    this.posts.push(dataPost);
    console.log(this.posts);
  }


  createPost(newPost:Post){
    this.posts.push(newPost);
    this.emitPost();
  }

  getPosts(){
    
  }









}
