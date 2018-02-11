import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-potential-hires',
  templateUrl: './search-potential-hires.component.html',
  styleUrls: ['./search-potential-hires.component.scss']
})
export class SearchPotentialHiresComponent implements OnInit {
  @Input() dropdown: any;
  @Output() filter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectFilter(filter: string) {
    this.filter.emit(filter);
  }
}
