import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

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
export class OverviewComponent implements OnInit {
  checked: boolean = true;

  data: Card[] = [];

  constructor(private bakcendService: BackendService) {}

  ngOnInit(): void {
    this.data = this.bakcendService.getData();
  }

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
