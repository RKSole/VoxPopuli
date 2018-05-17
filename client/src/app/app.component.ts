import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VOXPOPULI!';
  constructor(public sessionService: SessionService) {
    this.sessionService.userEvent.subscribe( user => {
      console.log("USER EVENT");
    });
  }
}
