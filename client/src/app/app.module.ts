import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SessionService } from './services/session.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { IndexComponent } from './index/index.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes.routing';
import { ReviewService } from './services/review.service';
import { CompanyService } from './services/company.service';
import { ListCompaniesComponent } from './list-companies/list-companies.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignUpComponent,
    AddCompanyComponent,
    UserProfileComponent,
    IndexComponent,
    CompanyDetailComponent,
    ListCompaniesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, ReviewService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
