import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DragulaModule } from 'ng2-dragula';
import { AgmCoreModule } from '@agm/core';

// app main component
import { AppComponent } from './app.component';

// routing module
import { AppRoutingModule } from './app-routing.module';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

// pages
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterFramePageComponent } from './pages/register-frame-page/register-frame-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateBusinessAccountComponent } from './pages/create-business-account/create-business-account.component';


// reusable components
import { LeftCarouselComponent } from './components/left-carousel/left-carousel.component';
import { OrganizationTreeComponent } from './components/organization-tree/organization-tree.component';
import { NotificationOfflineComponent } from './components/notification-offline/notification-offline.component';
import { NotificationOnlineComponent } from './components/notification-online/notification-online.component';

import { SharedModule } from './shared/shared.module';
import { DataListService } from './shared/data-list/data-list.service';

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

import { ContentEmployerMainMenuComponent } from './components/content-employer-main-menu/content-employer-main-menu.component';
import { ContentEmployeeMainMenuComponent } from './components/content-employee-main-menu/content-employee-main-menu.component';
import { ContentActivityComponent } from './components/content-activity/content-activity.component';
import { ContentOfficesComponent } from './components/content-offices/content-offices.component';
import { ContentSettingsComponent } from './components/content-settings/content-settings.component';
import { ContentBenchesComponent } from './components/content-benches/content-benches.component';
import { ContentSearchComponent } from './components/content-search/content-search.component';
import { ContentFriendsComponent } from './components/content-friends/content-friends.component';
import { ContentProfilesComponent } from './components/content-profiles/content-profiles.component';

import { OfficeGridViewComponent } from './components/office-grid-view/office-grid-view.component';
import { OfficeListViewComponent } from './components/office-list-view/office-list-view.component';
import { BenchEditComponent } from './components/bench-edit/bench-edit.component';
import { EndoresmentsComponent } from './components/endoresments/endoresments.component';
import { SelectSubscriptionComponent } from './components/select-subscription/select-subscription.component';
import { SearchFriendsComponent } from './components/search-friends/search-friends.component';
import { SearchPotentialHiresComponent } from './components/search-potential-hires/search-potential-hires.component';
import { CreateEmployeeAccountComponent } from './pages/create-employee-account/create-employee-account.component';
import { SearchPotentialsComponent } from './components/search-potentials/search-potentials.component';
import { SearchFriendsSettingsComponent } from './components/search-friends-settings/search-friends-settings.component';

import { OrgStructureComponent } from './components/org-structure/org-structure.component';
import { EditProfileEmployerComponent } from './components/edit-profile-employer/edit-profile-employer.component';
import { EditProfileEmployeeComponent } from './components/edit-profile-employee/edit-profile-employee.component';
import { ProfileReadOnlyEmployerComponent } from './components/profile-read-only-employer/profile-read-only-employer.component';
import { ProfileReadOnlyEmployeeComponent } from './components/profile-read-only-employee/profile-read-only-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterFramePageComponent,
    RegisterComponent,
    CreateBusinessAccountComponent,
    LeftCarouselComponent,
    OrganizationTreeComponent,
    NotificationOfflineComponent,
    NotificationOnlineComponent,

    EmployerMainMenuComponent,
    EmployerActivityComponent,
    EmployerOfficesComponent,
    EmployerSettingsComponent,
    EmployerBenchesComponent,
    EmployerSearchComponent,
    EmployerFriendsComponent,
    EmployerProfilesComponent,

    EmployeeMainMenuComponent,
    EmployeeActivityComponent,
    EmployeeOfficesComponent,
    EmployeeSettingsComponent,
    EmployeeBenchesComponent,
    EmployeeSearchComponent,
    EmployeeFriendsComponent,
    EmployeeProfilesComponent,

    ContentEmployerMainMenuComponent,
    ContentEmployeeMainMenuComponent,
    ContentActivityComponent,
    ContentOfficesComponent,
    ContentSettingsComponent,
    ContentBenchesComponent,
    ContentSearchComponent,
    ContentFriendsComponent,
    ContentProfilesComponent,

    OfficeGridViewComponent,
    OfficeListViewComponent,
    BenchEditComponent,
    EndoresmentsComponent,
    SelectSubscriptionComponent,
    SearchFriendsComponent,
    SearchPotentialHiresComponent,
    CreateEmployeeAccountComponent,
    SearchPotentialsComponent,
    SearchFriendsSettingsComponent,

    OrgStructureComponent,
    EditProfileEmployerComponent,
    EditProfileEmployeeComponent,
    ProfileReadOnlyEmployerComponent,
    ProfileReadOnlyEmployeeComponent,
  ],
  imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            NgbModule.forRoot(),
            MalihuScrollbarModule.forRoot(),
            SharedModule.forRoot(),
            AppRoutingModule,
            OwlDateTimeModule,
            BrowserAnimationsModule,
            OwlNativeDateTimeModule,
            DragulaModule,
            CommonModule,
            AgmCoreModule.forRoot({
              apiKey: 'AIzaSyBoGkd8vcKYtEjk-au_Dk-Lrq3I6M6zp-M'
            })
           ],
  providers: [DataListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
