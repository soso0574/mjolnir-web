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
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';

// reusable components
import { LeftCarouselComponent } from './components/left-carousel/left-carousel.component';
import { OrganizationTreeComponent } from './components/organization-tree/organization-tree.component';
import { NotificationOfflineComponent } from './components/notification-offline/notification-offline.component';
import { NotificationOnlineComponent } from './components/notification-online/notification-online.component';

import { SharedModule } from './shared/shared.module';
import { DataListService } from './shared/data-list/data-list.service';
import { ActivityComponent } from './pages/activity/activity.component';
import { OfficesComponent } from './pages/offices/offices.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BenchesComponent } from './pages/benches/benches.component';
import { SearchComponent } from './pages/search/search.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { OfficeGridViewComponent } from './components/office-grid-view/office-grid-view.component';
import { OfficeListViewComponent } from './components/office-list-view/office-list-view.component';
import { BenchEditComponent } from './components/bench-edit/bench-edit.component';
import { EndoresmentsComponent } from './components/endoresments/endoresments.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SelectSubscriptionComponent } from './components/select-subscription/select-subscription.component';
import { SearchFriendsComponent } from './components/search-friends/search-friends.component';
import { SearchPotentialHiresComponent } from './components/search-potential-hires/search-potential-hires.component';
import { CreateEmployeeAccountComponent } from './pages/create-employee-account/create-employee-account.component';
import { SearchPotentialsComponent } from './components/search-potentials/search-potentials.component';
import { SearchFriendsSettingsComponent } from './components/search-friends-settings/search-friends-settings.component';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { OrgStructureComponent } from './components/org-structure/org-structure.component';
import { ProfileReadOnlyComponent } from './components/profile-read-only/profile-read-only.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterFramePageComponent,
    RegisterComponent,
    CreateBusinessAccountComponent,
    ProfilesComponent,
    MainMenuComponent,
    LeftCarouselComponent,
    OrganizationTreeComponent,
    NotificationOfflineComponent,
    NotificationOnlineComponent,
    ActivityComponent,
    OfficesComponent,
    SettingsComponent,
    BenchesComponent,
    SearchComponent,
    FriendsComponent,
    OfficeGridViewComponent,
    OfficeListViewComponent,
    BenchEditComponent,
    EndoresmentsComponent,
    EditProfileComponent,
    SelectSubscriptionComponent,
    SearchFriendsComponent,
    SearchPotentialHiresComponent,
    CreateEmployeeAccountComponent,
    SearchPotentialsComponent,
    SearchFriendsSettingsComponent,
    EmployeeProfileComponent,
    OrgStructureComponent,
    ProfileReadOnlyComponent,
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
