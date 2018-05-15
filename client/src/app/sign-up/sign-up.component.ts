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
  profilePic: String;
  error: string;


  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() { }

  signup() {
    const user = {
      username: this.username, password: this.password, birthdate: this.birthdate,
      email: this.email, profilePic: this.profilePic
    };
    this.sessionService.signup(user).subscribe((() => this.router.navigate(['/login'])));
  }
}
