import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-potential-hires',
  templateUrl: './search-potential-hires.component.html',
  styleUrls: ['./search-potential-hires.component.scss']
})
export class SearchPotentialHiresComponent implements OnInit {
  @Input() dropdown: any;
  @Output() filter = new EventEmitter();
  sugguestList = [];
  constructor() { }

  ngOnInit() {
  }

  selectFilter(filter: string) {
    this.filter.emit(filter);
  }

  // Auto complete for Location
  selectLocation(model) {
    const searched_text = model.trim();
    if (searched_text === '') {
      this.sugguestList = [];
      return;
    }
    const sugguestList_temp = [];
    this.dropdown['locationDropdown']['locations'].forEach(function(item, index){
      if (item['place'].toLowerCase().indexOf(searched_text.toLowerCase()) > -1
        || item['zip'].toLowerCase().indexOf(searched_text.toLowerCase()) > -1) {
        sugguestList_temp.push(item);
      }
    });
    this.sugguestList = sugguestList_temp;
  }
}
