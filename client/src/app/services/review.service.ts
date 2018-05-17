import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const BASEURL: string = environment.BASEURL;

@Injectable()
export class ReviewService {
  review: any;
  BASEURL: string = environment.BASEURL;
  options: any = { withCredentials: true };

  constructor(private http: Http) { }
  get(id) {
    return this.http
      .get(`${this.BASEURL}/api/review/${id}`)
      .map(res => res.json());
  }
  getReviewCompanies(companyId) {
    console.log(companyId);
    return this.http
      .get(`${this.BASEURL}/api/review/comments/${companyId}`)
      .map(res => res.json());
  }

  getReviewCritic(userID) {
    console.log(userID);
    return this.http
      .get(`${this.BASEURL}/api/review/critic/${userID}`)
      .map(res => res.json());
  }
  getList() {
    return this.http
      .get(`${this.BASEURL}/api/review`)
      .map((res) => res.json());
  }
  create(review) {
    return this.http
      .post(`${this.BASEURL}/api/review`, review)
      .map(res => res.json());
  }
  edit(review) {
    return this.http
      .put(`${this.BASEURL}/api/review/${review._id}`, review)
      .map(res => res.json());
  }
  remove(id) {
    return this.http
      .delete(`${this.BASEURL}/api/review/${id}`)
      .map(res => res.json());
  }
}
