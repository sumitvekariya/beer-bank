import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beer-bank';
  constructor(private route: Router) {

  }

  redirect(route: string) {
    this.route.navigate([route]);
  }
}
