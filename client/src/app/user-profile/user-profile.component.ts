import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ReviewService } from '../services/review.service';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  review: Array<any>;
  critic: Array<any>;
  firm: Array<any>;
  user: any;
  company: any;
  bol: boolean = false;

  constructor(
    private sessionService: SessionService,
    private reviewService: ReviewService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    public router: Router,
  ) {
}

  ngOnInit() {
    this.sessionService.isLoggedIn().subscribe(user => {
      this.user = user;
      console.log(this.user);
      this.reviewService.getReviewCritic(this.user._id).subscribe(review => {
        this.review = review;
        console.log(this.review);
        this.bol = true;
      });
    });
}
}
