import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveFormsDemo';

  file = { name: 'logo.svg', size: 212010934, type: 'image/svg' };
  //d = new Date();
}
