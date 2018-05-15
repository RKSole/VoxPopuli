import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { ListCompaniesComponent } from './list-companies/list-companies.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'profile/:id', component: UserProfileComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'company', component: AddCompanyComponent},
  { path: 'companyDetail/:id', component: CompanyDetailComponent},
  { path: 'companyList', component: ListCompaniesComponent},
  { path: '**', redirectTo: '' }
];

