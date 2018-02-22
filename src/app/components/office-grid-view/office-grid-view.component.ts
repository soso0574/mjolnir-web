import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-office-grid-view',
  templateUrl: './office-grid-view.component.html',
  styleUrls: ['./office-grid-view.component.scss']
})
export class OfficeGridViewComponent implements OnInit {
  @Input() data: any[];
  constructor() { }

  ngOnInit() {
  }

}
