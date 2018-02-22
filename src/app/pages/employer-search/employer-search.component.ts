import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-search',
  templateUrl: './employer-search.component.html',
  styleUrls: ['./employer-search.component.scss']
})
export class EmployerSearchComponent {
  jsonFile = '../../assets/data/dataSearchEmployer.json';
}
