import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.html',
  styleUrls: ['./display.css'],
  standalone: true
})
export class DisplayComponent {
  @Input() value = '';
}
