import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts = [new Post('Titi', 'Test', 0), new Post('Tata', 'Test', 0), new Post('Tutu', 'Test', 0)];
}
