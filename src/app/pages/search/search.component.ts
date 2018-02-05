import { Component, OnInit } from '@angular/core';
import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private errorMessage: string;
  private searchData: any[];
  private showRightPanel = {
    isShown: false
  };
  private galleryView = true;
  private tabs = 'friends';
  private settingsTab = 'friends';
  private activeFilter: string;
  private filter: boolean;
  private headerMenus = [
    {'name': 'friends', 'url': '/friends'},
    {'name': 'profiles', 'url': '/profiles'},
    {'name': 'benches', 'url': '/benches'}
  ];

  /**
   * Creates an instance of the NotificationOfflineComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(
    public dataListService: DataListService
  ) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataSearch.json');
  }

  /**
   * Handle the dataListService observable
   */
  getDataList(jsonUrl) {
    this.dataListService.get(jsonUrl)
      .subscribe(
        data => this.searchData = data,
        error => this.errorMessage = <any>error,
      );
  }

  filterOpen(filter: string) {
    this.activeFilter = filter;
    this.filter = true;
    window.scrollTo(0, 0);
  }
  filterClose() {
    this.activeFilter = null;
    this.filter = false;
    window.scrollTo(0, 0);
  }

}
