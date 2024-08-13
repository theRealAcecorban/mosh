import { Component, OnInit } from '@angular/core';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import { AppErrorHandler } from '../common/app-error-handler';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        response => this.posts = response);
  }

  getPost(post) {
    this.service.get(post.id)
    .subscribe(
      response => console.log(response));
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = "";

    this.service.create(post)
    .subscribe(
      response => {
        post['id'] = response['id'];
      },
      (error: AppError) => {
        this.posts.splice(0,1);
        if(error instanceof BadRequestError)
        {
//            this.form.setErrors(error.originalError);
        }
        else throw error;
      });
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(
      response => console.log(response));
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
    .subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if(error instanceof NotFoundError)
        {
         alert("This post has already been deleted."); 
        }
        else throw error;
      });
  }
}
