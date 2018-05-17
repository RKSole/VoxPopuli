import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDetailComponent } from '../company-detail/company-detail.component';
import { FilterPipe} from '../filter.pipe';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {
  company$: Observable<any>;
  company: Array<any> = [];
  public router: Router;

  constructor(companyService: CompanyService) {
    this.company$ = companyService.getList();
    companyService.getList().subscribe( company => this.company = company);
   }

  ngOnInit() {
  }

};

