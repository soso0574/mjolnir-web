import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.scss']
})
export class SearchFriendsComponent implements OnInit {
  @Input() galleries: any;

  scrollbarOptions = {
    axis: 'yx',
    theme: 'minimal-dark'
  };
  constructor() { }

  ngOnInit() {
  }

}
