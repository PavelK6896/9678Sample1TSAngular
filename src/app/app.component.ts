import {Component} from '@angular/core';

@Component({// компанет1
  selector: 'app-root',     // создает тег
  templateUrl: './app.component.html', // путь к телу
  styleUrls: ['./app.component.css'] // путь к стилям
})
export class AppComponent {
  title = 'app-root';
  n1 = 9999;
}
