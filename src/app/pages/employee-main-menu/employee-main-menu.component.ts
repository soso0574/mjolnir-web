import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded MainMenuComponent.
 */
@Component({
  selector: 'app-sd-employee-main-menu',
  templateUrl: 'employee-main-menu.component.html',
  styleUrls: ['employee-main-menu.component.scss']
})
export class EmployeeMainMenuComponent {
  selectedRoleItem = {
    imgUrl: '../../../assets/i/bench-users4.jpg',
    title: '',
    number: 0,
    smallTitle: '',
    employee: false
  };

  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataMainMenuEmployee.json';
}
