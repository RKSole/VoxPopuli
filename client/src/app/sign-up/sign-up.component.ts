import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(public sessionService: SessionService) {}

  ngOnInit() {}

    signup() {
      const user = {
        username: this.username,
        password: this.password
    }
  }

}
