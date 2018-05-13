import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  birthdate: Date;
  error: string;

  constructor(public sessionService: SessionService) { }

  ngOnInit() { }

  signup() {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      birthdate: this.birthdate
    };
    console.log(user);
    this.sessionService.signup(this.username, this.password).subscribe(
      (any) => console.log(user),
      (err) => this.error = err
    );
  }
}
