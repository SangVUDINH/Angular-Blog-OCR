import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';
import { Post } from '../../model/Post.model';

import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private postsService: PostsService, private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    }

  initForm(){
    this.postForm= this.formBuilder.group({
      title : [''],
      content: [''],
      loveIts: [],
      created_at: Date
    });
  }

  onSubmit(){
    console.log(this.postForm.value);
  }


}
