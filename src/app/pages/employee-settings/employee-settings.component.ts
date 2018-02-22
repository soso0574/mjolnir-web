import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-settings',
  templateUrl: './employee-settings.component.html',
  styleUrls: ['./employee-settings.component.scss']
})
export class EmployeeSettingsComponent {
  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataSettingsEmployee.json';
}
