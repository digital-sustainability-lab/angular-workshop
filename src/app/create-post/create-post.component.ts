import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../overview/overview.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  model: any = {};
  id: number = -1;
  myForm: FormGroup | undefined;

  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    if (this.id > -1) {
      this.getFormInput(this.id);
    } else {
      this.initForm();
    }
  }

  getFormInput(id: number) {
    this.backendService.getData().subscribe((data) => {
      const current = data.find((post) => post.id === id);
      this.initForm(current);
    });
  }

  initForm(input?: Card) {
    this.myForm = new FormGroup({
      author: new FormControl(input ? input.author : null, Validators.required),
      title: new FormControl(input ? input.title : null, Validators.required),
      description: new FormControl(
        input ? input.description : null,
        Validators.required
      ),
      imageUrl: new FormControl(
        input ? input.imageUrl : null,
        Validators.required
      ),
    });
  }

  onSubmit() {
    if (this.myForm?.valid) {
      if (this.id === -1) {
        return this.backendService
          .storeData(this.myForm.value)
          .subscribe(console.log);
      } else {
        return this.backendService
          .patchData(this.id, this.myForm.value)
          .subscribe(console.log);
      }
    }
    return false;
  }
}
