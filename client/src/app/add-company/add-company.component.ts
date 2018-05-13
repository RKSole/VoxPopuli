import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  owner: Array<any>;
  companyName: String;
  telephoneNumber: Number;
  email: String;
  nature: Array<any>;
  image: String;
  constructor(
    private CompanyService: CompanyService,
    private SessionService: SessionService
  ) { }


  ngOnInit() { }

  addCompany() {
    const company = {
      companyName: this.companyName,
      owner: this.SessionService.user,
      telephoneNumber: this.telephoneNumber,
      email: this.email,
      nature: this.nature,
      image: this.image
    };
  }
}
