import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card: any;
  @Output('output') output: EventEmitter<boolean> = new EventEmitter(false);

  checked: boolean = true;
  attribute: string = 'color';

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.output.emit(true);
    this.router.navigate([`detail/${id}`]);
  }
}
