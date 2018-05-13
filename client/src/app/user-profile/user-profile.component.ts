import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ReviewService } from '../services/review.service';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  review: Array<any>;
  critic: Array<any>;
  firm: Array<any>;
  constructor(
    private sessionService: SessionService,
    private reviewService: ReviewService,
    private companyService: CompanyService
  ) { }

  ngOnInit() { }

  updateProfile() {
    const profile = {
      critic: this.sessionService.user,
      firm: this.companyService.company,
      review: this.reviewService.review
    };
  }
}
