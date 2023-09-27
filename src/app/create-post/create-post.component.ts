import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  model: any = {};

  constructor() {}

  onSubmit(f: NgForm) {}
}
