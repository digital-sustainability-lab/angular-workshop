import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card: any;
  checked: boolean = true;
  attribute: string = 'color';

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigate([`detail/${id}`]);
  }
}
