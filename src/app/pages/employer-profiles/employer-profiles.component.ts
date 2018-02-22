import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded ProfilesComponent.
 */
@Component({
  selector: 'app-sd-employer-profiles',
  templateUrl: 'employer-profiles.component.html',
  styleUrls: ['employer-profiles.component.scss']
})
export class EmployerProfilesComponent {
  jsonFile = '../../assets/data/dataProfileEmployer.json';

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
