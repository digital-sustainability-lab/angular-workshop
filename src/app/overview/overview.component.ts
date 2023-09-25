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

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate([`detail/${id}`]);
  }
}
