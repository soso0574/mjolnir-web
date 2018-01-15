import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterFramePageComponent } from './pages/register-frame-page/register-frame-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateBusinessAccountComponent } from './pages/create-business-account/create-business-account.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-frame-page', component: RegisterFramePageComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: '**', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
