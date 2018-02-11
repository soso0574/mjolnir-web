import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-office-list-view',
  templateUrl: './office-list-view.component.html',
  styleUrls: ['./office-list-view.component.scss']
})
export class OfficeListViewComponent implements OnInit {
  @Input() data: any[];
  constructor() { }

  ngOnInit() {
  }

}
