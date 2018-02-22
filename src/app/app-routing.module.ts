import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterFramePageComponent } from './pages/register-frame-page/register-frame-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateBusinessAccountComponent } from './pages/create-business-account/create-business-account.component';

import { EmployerMainMenuComponent } from './pages/employer-main-menu/employer-main-menu.component';
import { EmployerActivityComponent } from './pages/employer-activity/employer-activity.component';
import { EmployerOfficesComponent } from './pages/employer-offices/employer-offices.component';
import { EmployerSettingsComponent } from './pages/employer-settings/employer-settings.component';
import { EmployerBenchesComponent } from './pages/employer-benches/employer-benches.component';
import { EmployerSearchComponent } from './pages/employer-search/employer-search.component';
import { EmployerFriendsComponent } from './pages/employer-friends/employer-friends.component';
import { EmployerProfilesComponent } from './pages/employer-profiles/employer-profiles.component';

import { EmployeeMainMenuComponent } from './pages/employee-main-menu/employee-main-menu.component';
import { EmployeeActivityComponent } from './pages/employee-activity/employee-activity.component';
import { EmployeeOfficesComponent } from './pages/employee-offices/employee-offices.component';
import { EmployeeSettingsComponent } from './pages/employee-settings/employee-settings.component';
import { EmployeeBenchesComponent } from './pages/employee-benches/employee-benches.component';
import { EmployeeSearchComponent } from './pages/employee-search/employee-search.component';
import { EmployeeFriendsComponent } from './pages/employee-friends/employee-friends.component';
import { EmployeeProfilesComponent } from './pages/employee-profiles/employee-profiles.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-frame-page', component: RegisterFramePageComponent },
  { path: 'register-frame-page/:createBusinessProfile', component: RegisterFramePageComponent },

  { path: 'employer-main-menu', component: EmployerMainMenuComponent },
  { path: 'employer-activity', component: EmployerActivityComponent },
  { path: 'employer-offices', component: EmployerOfficesComponent },
  { path: 'employer-settings', component: EmployerSettingsComponent },
  { path: 'employer-benches', component: EmployerBenchesComponent },
  { path: 'employer-search', component: EmployerSearchComponent },
  { path: 'employer-friends', component: EmployerFriendsComponent },
  { path: 'employer-profiles', component: EmployerProfilesComponent },
  { path: 'employer-profiles/:edit', component: EmployerProfilesComponent },

  { path: 'employee-main-menu', component: EmployeeMainMenuComponent },
  { path: 'employee-activity', component: EmployeeActivityComponent },
  { path: 'employee-offices', component: EmployeeOfficesComponent },
  { path: 'employee-settings', component: EmployeeSettingsComponent },
  { path: 'employee-benches', component: EmployeeBenchesComponent },
  { path: 'employee-search', component: EmployeeSearchComponent },
  { path: 'employee-friends', component: EmployeeFriendsComponent },
  { path: 'employee-profiles', component: EmployeeProfilesComponent },
  { path: 'employee-profiles/:edit', component: EmployeeProfilesComponent },

  { path: '**', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
