import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  label: string = 'this is a toggle';
  checked: boolean = true;

  data = [
    {
      title: 'Fancy first blog post',
      description: 'Hello world! Here I am!',
      color: 'blue',
      class: 'special',
      show: true,
    },
    {
      title: 'Fancy second blog post',
      description: 'Hello world! Here I am!',
      color: 'black',
      class: 'special',
      show: true,
    },
    {
      title: 'Fancy third blog post',
      description: 'Hello world! Here I am!',
      color: 'green',
      class: 'normal',
      show: false,
    },
    {
      title: 'Fancy fourth blog post',
      description: 'Hello world! Here I am!',
      color: 'green',
      class: 'normal',
      show: true,
    },
  ];

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate([`detail/${id}`]);
  }
}
