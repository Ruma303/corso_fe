import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './components/calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculator],
  templateUrl: './app.html',
  standalone: true
})
export class App {
  protected title = 'Calculator App';
}
