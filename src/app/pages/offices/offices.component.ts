import { Component, OnInit } from '@angular/core';
import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {

  showRightPanel = {
    isShown: false
  };
  gridView = true;
  errorMessage: string;
  officeList: any[];
  headerMenus = [
    {'name': 'friends', 'url': '/friends'},
    {'name': 'profiles', 'url': '/profiles'},
    {'name': 'benches', 'url': '/benches'}
  ];
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
    this.getDataList('../../assets/data/dataOffices.json');
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
