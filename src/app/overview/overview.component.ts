import { Component } from '@angular/core';

export interface Card {
  id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  color: string;
  class: string;
  show: boolean;
  read: boolean;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  checked: boolean = true;

  data: Card[] = [
    {
      id: 1,
      title: 'Fancy first blog post',
      description: 'Hello world! Here I am!',
      author: 'Amazing, Laura',
      imageUrl: 'https://cdn2.thecatapi.com/images/34h.jpg',
      color: 'blue',
      class: 'special',
      show: true,
      read: true,
    },
    {
      id: 2,
      title: 'Fancy second blog post',
      description: 'Hello world! Here I am!',
      author: 'Excited, John',
      imageUrl: 'https://cdn2.thecatapi.com/images/9pj.jpg',
      color: 'black',
      class: 'special',
      show: true,
      read: false,
    },
    {
      id: 3,
      title: 'Fancy third blog post',
      description: 'Hello world! Here I am!',
      author: 'Mesmerising, Billy',
      imageUrl: 'https://cdn2.thecatapi.com/images/bhp.jpg',
      color: 'green',
      class: 'normal',
      show: false,
      read: false,
    },
    {
      id: 4,
      title: 'Fancy fourth blog post',
      description: 'Hello world! Here I am!',
      author: 'Surprising, Lisa',
      imageUrl: 'https://cdn2.thecatapi.com/images/eaj.jpg',
      color: 'green',
      class: 'normal',
      show: true,
      read: true,
    },
  ];

  getSorted() {
    return this.data.sort((a, b) => {
      if (a.read && !b.read) {
        return 1;
      }
      if (!a.read && b.read) {
        return -1;
      }
      return 0;
    });
  }
}
