import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-offices',
  templateUrl: './employee-offices.component.html',
  styleUrls: ['./employee-offices.component.scss']
})
export class EmployeeOfficesComponent {
  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataOfficesEmployee.json';
}
