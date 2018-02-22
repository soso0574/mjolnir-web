import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded EmployeeProfilesComponent.
 */
@Component({
  selector: 'app-employee-profiles',
  templateUrl: 'employee-profiles.component.html',
  styleUrls: ['employee-profiles.component.scss']
})
export class EmployeeProfilesComponent {
  jsonFile = '../../assets/data/dataProfileEmployee.json';

  pageParam = {
    'showProfilePopup': false,
    'showRightPanel': {
      'isShown': false
    },
    subscribeData: [],
    endorseData: [],
    activeView: ''
  };
}
