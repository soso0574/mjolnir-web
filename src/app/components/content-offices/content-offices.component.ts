import { Component, OnInit, Input } from '@angular/core';
import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-content-offices',
  templateUrl: './content-offices.component.html',
  styleUrls: ['./content-offices.component.scss']
})
export class ContentOfficesComponent implements OnInit {
  @Input() jsonFile: string;
  @Input() userRole: string;
  gridView = true;
  errorMessage: string;
  officeList: any[];

  scrollbarOptions = {
    axis: 'yx',
    theme: 'minimal-dark'
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
    this.getDataList(this.jsonFile);
  }

  /**
   * Handle the dataListService observable
   */
  getDataList(jsonUrl) {
    this.dataListService.get(jsonUrl)
      .subscribe(
        data => this.officeList = data,
        error => this.errorMessage = <any>error,
      );
  }
}
