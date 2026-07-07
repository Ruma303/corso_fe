import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { DisplayComponent } from '../display/display';

@Component({
  selector: 'app-calculator',
  imports: [ButtonComponent, DisplayComponent],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
})
export class Calculator {

  current = '';

  onButton(n: number) {
    this.current += n;
  }
}
