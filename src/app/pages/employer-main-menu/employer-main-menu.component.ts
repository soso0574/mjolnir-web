import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded MainMenuComponent.
 */
@Component({
  selector: 'app-sd-employer-main-menu',
  templateUrl: 'employer-main-menu.component.html',
  styleUrls: ['employer-main-menu.component.scss']
})
export class EmployerMainMenuComponent {
  selectedRoleItem = {
    imgUrl: '../../../assets/i/girl-photo.jpg',
    title: '',
    number: 0,
    smallTitle: '',
    employee: false
  };

  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataMainMenuEmployer.json';
}
