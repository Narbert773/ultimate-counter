import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './data/services/post.service';
import { Post } from './data/interfaces/post.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter = 0;

  postService = inject(PostService);
  posts: Post[] = [];

  get doubleCounter() {
    return this.counter * 2;
  }

  incrementCounter() {
    this.counter += 1;
  }

  decrementCounter() {
    this.counter -= 1;
  }

  constructor() {
    this.postService.getPosts().subscribe((val) => {
      this.posts = val.slice(0, 10);
    });
  }
}
