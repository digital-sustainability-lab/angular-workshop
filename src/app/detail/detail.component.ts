import { BackendService } from './../backend.service';
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
  data: Card[] = [];
  currentPost: Card | undefined;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.backendService.getData().subscribe((data) => {
      this.data = data;
      this.currentPost = this.getDetail(this.id);
    });
  }

  getDetail(id: number) {
    return this.data.find((c) => c.id === id);
  }
}
