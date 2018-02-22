import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-offices',
  templateUrl: './employer-offices.component.html',
  styleUrls: ['./employer-offices.component.scss']
})
export class EmployerOfficesComponent {
  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataOfficesEmployer.json';
}
