import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-benches',
  templateUrl: './employee-benches.component.html',
  styleUrls: ['./employee-benches.component.scss']
})
export class EmployeeBenchesComponent {
  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataBenchesEmployee.json';
}
