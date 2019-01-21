import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Smash Bros Ultimate - Heroes';
}
export class Hero {
  id: number;
  name: string;
}