import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { AddCompanyComponent } from '../add-company/add-company.component';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company;
  user;
  constructor(
    private CompanyService: CompanyService,
    route: ActivatedRoute,
    public router: Router,
    private sessionService: SessionService,
  ) {
    route.params.subscribe(params => {
      CompanyService.get(params.id).subscribe(company => {
        this.company = company;
        console.log(this.company);
        this.refreshCompany();
      });
    });
  }

  ngOnInit() {}

  refreshCompany() {
    this.CompanyService
      .get(this.company._id)
      .subscribe(company => (this.company = company));
  }

}
