import { Component, inject, signal } from '@angular/core';
import { Lettore } from './services/lettore';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  protected title = 'lettorepostprotetti';

  result = signal<string>('');

  private lettoreServ = inject(Lettore);

  constructor() {
    // Esecuzione della chiamata HTTP
    this.lettoreServ.getPostsObservable().subscribe({
      next: (data) => {
        this.result.set('POST TROVATI: ' + JSON.stringify(data));
      },
      error: (err) => {
        this.result.set('ERRORE: ' + JSON.stringify(err));
      }
    });
  }

}
