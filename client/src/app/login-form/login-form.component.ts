import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(public sessionService: SessionService) { }

  ngOnInit() { }

  login() {
    console.log(this.username, this.password);
    this.sessionService.login(this.username, this.password).subscribe();
  }
}
