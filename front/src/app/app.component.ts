import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userData = {
    userName: 'Joaquim',
    email: 'joaquim@gmail.com',
    role: 'Programador',
  };

  title = 'curso-angular-13';
}
