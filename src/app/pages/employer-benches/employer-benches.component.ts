import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-benches',
  templateUrl: './employer-benches.component.html',
  styleUrls: ['./employer-benches.component.scss']
})
export class EmployerBenchesComponent {
  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataBenchesEmployer.json';
}
