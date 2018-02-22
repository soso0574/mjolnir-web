import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-activity',
  templateUrl: './employee-activity.component.html',
  styleUrls: ['./employee-activity.component.scss']
})
export class EmployeeActivityComponent {
  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataActivitiesEmployee.json';
}
