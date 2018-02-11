import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-friends-settings',
  templateUrl: './search-friends-settings.component.html',
  styleUrls: ['./search-friends-settings.component.scss']
})
export class SearchFriendsSettingsComponent implements OnInit {
  @Input() dropdown: any;
  @Output() filter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectFilter(filter: string) {
    this.filter.emit(filter);
  }
}
