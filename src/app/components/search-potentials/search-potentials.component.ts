import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-potentials',
  templateUrl: './search-potentials.component.html',
  styleUrls: ['./search-potentials.component.scss']
})
export class SearchPotentialsComponent implements OnInit {
  @Input() galleries: any;
  constructor() { }

  ngOnInit() {
  }

}
