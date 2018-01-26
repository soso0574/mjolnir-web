import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    NotificationOnlineComponent
  ],
  imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            NgbModule.forRoot(),
            MalihuScrollbarModule.forRoot(),
            SharedModule.forRoot(),
            AppRoutingModule,
           ],
  providers: [DataListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
