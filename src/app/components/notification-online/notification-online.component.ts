import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded NotificationOnlineComponent.
 */
@Component({
  selector: 'app-sd-notification-online',
  templateUrl: 'notification-online.component.html',
  styleUrls: ['notification-online.component.scss']
})
export class NotificationOnlineComponent implements OnInit {
  @Input() notificationValue = {
    totalNumber: 0
  };

  errorMessage: string;
  dataList: any[] = [];

  stepIndex = -1;

  /**
   * Creates an instance of the NotificationOnlineComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataNotificationOnline.json');

    setTimeout( () => {
      this.stepIndex = 0;
      this.notificationValue.totalNumber++;
    }, 1000);
  }

  initData() {
  }

  // click Close icon show next notification
  clickClose() {
    this.stepIndex++;
    this.notificationValue.totalNumber++;
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
