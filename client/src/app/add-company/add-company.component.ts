import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { SessionService } from '../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDetailComponent } from '../company-detail/company-detail.component';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  company: Array<any>;
  owner: Array<any>;
  companyName: String;
  telephoneNumber: String;
  email: String;
  image: String;
  url: String;
  comments: String;
  nature: Array<any> = ['E-commerce', 'Department Stores', 'Hospitality', 'Large Corporations', 'Finance', 'Health Centers',
    'Educational Institutions', 'Wellness Industry', 'Sport Facility', 'SMEs', 'Government Institutions',
    'Transport System', 'Entertainment'];


  constructor(
    private CompanyService: CompanyService,
    private SessionService: SessionService,
    private route: ActivatedRoute,
    public router: Router

  ) { }

  ngOnInit() {
    //this.CompanyService.create(this.company).subscribe((company) => console.log('Create Companny', company))
  }


  addCompany(myForm, select) {
    console.log(myForm.value, select);
    // PARA ACCEDER A LOS VALORES sera myForm.value.name.....
    const company = {
      companyName: myForm.value.companyName,
      telephoneNumber: myForm.value.telephoneNumber,
      email: myForm.value.email,
      nature: select,
      image: myForm.value.image,
      url: myForm.value.url,
      comments: myForm.value.comments


    };

    //FIJATE EN EL MODELO Y PON TODOS LOS CAMPOS QUE NECESITES TANTO EN EL FORM COMO EN EL OBJETO DE LA LINEA 36
    console.log("PARA PROBAR QUE LOS DATOS ESTA OK", company)

    //ESTO DESCOMENTAR CUANDO VAYA A PROBAR EL BACK
    this.CompanyService.create(company).subscribe(empresa => {
      this.router.navigate([`/companyDetail/${empresa._id}`]);
    });
    this.route.params.subscribe(params => {
    this.company = params['id'];
    });

  }

}
