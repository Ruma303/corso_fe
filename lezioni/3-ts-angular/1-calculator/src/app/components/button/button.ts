import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
  standalone: true
})
export class ButtonComponent {
  @Input() val!: number;
  @Output() pressed = new EventEmitter<number>();

  onClick() {
    this.pressed.emit(this.val);
  }
}
