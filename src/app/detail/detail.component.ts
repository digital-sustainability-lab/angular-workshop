import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../overview/overview.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id: number = -1;
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
      read: false,
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
      read: false,
    },
  ];
  currentPost: Card | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.currentPost = this.getDetail(this.id);
  }

  getDetail(id: number) {
    return this.data.find((c) => c.id === id);
  }
}
