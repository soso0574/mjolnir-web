import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-activity',
  templateUrl: './employer-activity.component.html',
  styleUrls: ['./employer-activity.component.scss']
})
export class EmployerActivityComponent {
  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataActivitiesEmployer.json';
}
