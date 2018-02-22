import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-content-activity',
  templateUrl: './content-activity.component.html',
  styleUrls: ['./content-activity.component.scss']
})
export class ContentActivityComponent implements OnInit {
  @Input() jsonFile: string;
  @Input() userRole: string;
  errorMessage: string;
  acivityList: any[];

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
    this.getDataList(this.jsonFile);
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
