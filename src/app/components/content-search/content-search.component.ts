import { Component, OnInit, Input } from '@angular/core';
import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit {
  @Input() jsonFile: string;
  @Input() userRole: string;
  errorMessage: string;
  searchData: any[];

  galleryView = true;
  tabs = 'friends';
  settingsTab = 'friends';
  activeFilter: string;
  filter: boolean;

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
    this.getDataList(this.jsonFile);
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
