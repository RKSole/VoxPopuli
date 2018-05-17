import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';
const BASEURL: string = environment.BASEURL;

@Injectable()
export class CompanyService {
  company: any;
  BASEURL: string = environment.BASEURL;
  options: any = { withCredentials: true };

  constructor(private http: Http) { }
  get(id) {
    return this.http
      .get(`${this.BASEURL}/api/company/${id}`)
      .map(res => res.json());
  }
  getList() {
    return this.http
      .get(`${this.BASEURL}/api/company`)
      .map((res) => res.json());
  }
  create(company) {
    return this.http
      .post(`${this.BASEURL}/api/company`, company)
      .map(res => res.json());
  }
  edit(company) {
    return this.http
      .put(`${this.BASEURL}/api/company/${company._id}`, company)
      .map(res => res.json());
  }

  remove(id) {
    return this.http
      .delete(`${this.BASEURL}/api/company/${id}`)
      .map(res => res.json());
  }

}
