import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded NotificationOfflineComponent.
 */
@Component({
  selector: 'app-sd-notification-offline',
  templateUrl: 'notification-offline.component.html',
  styleUrls: ['notification-offline.component.scss']
})
export class NotificationOfflineComponent implements OnInit {
  @Input() showRightPanel: any[];
  @Input() onlinePanel: boolean;

  errorMessage: string;
  dataList: any[] = [];

  notificationValue = {
    totalNumber: 0
  };

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
    this.getDataList('../../assets/data/dataNotificationOffline.json');
  }

  initData() {
    let temp_totalNumber = 0;
    this.dataList.forEach(function(groupItem, groupIndex) {
      groupItem.list.forEach(function(item, index) {
        temp_totalNumber++;
      });
    });

    this.notificationValue.totalNumber = temp_totalNumber;
  }

  /**
   * Handle the dataListService observable
   */
  getDataList(jsonUrl) {
    this.dataListService.get(jsonUrl)
      .subscribe(
        dataList => this.dataList = dataList,
        error => this.errorMessage = <any>error,
        () => this.initData()
      );
  }
}
