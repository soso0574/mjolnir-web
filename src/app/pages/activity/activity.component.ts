import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  private showRightPanel = {
    isShown: false
  };
  private errorMessage: string;
  private acivityList: any[];
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
  constructor(public dataListService: DataListService) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataActivities.json');
  }

  /**
   * Handle the dataListService observable
   */
  getDataList(jsonUrl) {
    this.dataListService.get(jsonUrl)
      .subscribe(
        acivityList => this.acivityList = acivityList,
        error => this.errorMessage = <any>error,
      );
  }

}
