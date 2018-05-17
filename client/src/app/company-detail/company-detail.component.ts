import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { AddCompanyComponent } from '../add-company/add-company.component';
import { ReviewService } from '../services/review.service';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company;
  user: any;
  review: any;
  comments: any;
  punctuation: any;
  error: any;

  constructor(
    private ReviewService: ReviewService,
    private CompanyService: CompanyService,
    private route: ActivatedRoute,
    public router: Router,
    private sessionService: SessionService,
  ) {
    route.params.subscribe(params => {
      CompanyService.get(params.id).subscribe(company => {
        this.company = company;
        console.log(this.company);
        this.ReviewService.getReviewCompanies(params.id).subscribe(review => {
          this.review = review;
          console.log(this.review);
        });
      });
    });
  }

  ngOnInit() {
    this.sessionService.isLoggedIn().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  refreshCompany() {
    this.CompanyService
      .get(this.company._id)
      .subscribe(company => (this.company = company));
  }

  newReview(myForm) {
    const review = {
      critic: this.user._id,
      firm: this.company._id,
      comments: myForm.value.comments,
      punctuation: myForm.value.punctuation,
    };
    console.log('PARA PROBAR QUE LOS DATOS ESTA OK', review);

    this.ReviewService.create(review).subscribe(() => {
      this.review.push(review);
      this.comments = '';
      this.punctuation = '';
       });
  }
}
