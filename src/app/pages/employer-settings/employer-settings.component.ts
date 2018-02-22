import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-settings',
  templateUrl: './employer-settings.component.html',
  styleUrls: ['./employer-settings.component.scss']
})
export class EmployerSettingsComponent {
  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataSettingsEmployer.json';
}
