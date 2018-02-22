import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { EmployerHeaderProfileComponent } from './employer-header-profile/employer-header-profile.component';
import { EmployeeHeaderProfileComponent } from './employee-header-profile/employee-header-profile.component';
import { DataListService } from './data-list/data-list.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, NgbModule.forRoot()],
  declarations: [
                 HeaderLandingComponent,
                 EmployerHeaderProfileComponent,
                 EmployeeHeaderProfileComponent
                ],
  exports: [
            HeaderLandingComponent,
            EmployerHeaderProfileComponent,
            EmployeeHeaderProfileComponent,
            CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [DataListService]
    };
  }
}
