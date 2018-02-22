import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent {
  jsonFile = '../../assets/data/dataSearchEmployee.json';
}
