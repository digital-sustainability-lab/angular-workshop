import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  model: any = {};

  constructor(private backendService: BackendService) {}

  onSubmit(f: NgForm) {
    if (f.valid) {
      return this.backendService.storeData(f.value).subscribe(console.log);
    }
    return false;
  }
}
