import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { DataListService } from '../../shared/data-list/data-list.service';


@Component({
  selector: 'app-benches',
  templateUrl: './benches.component.html',
  styleUrls: ['./benches.component.scss']
})
export class BenchesComponent implements OnInit {
  private errorMessage: string;
  private benches: any[];
  private activeBench: any[];
  private showRightPanel = {
    isShown: false
  };
  private dates = new Date();
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
    public dataListService: DataListService,
    private modalService: NgbModal
  ) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataBenches.json');
  }

  /**
   * Handle the dataListService observable
   */
  getDataList(jsonUrl) {
    this.dataListService.get(jsonUrl)
      .subscribe(
        data => this.benches = data,
        error => this.errorMessage = <any>error,
      );
  }

  // Select bench
  benchSelect(bench) {
    this.activeBench = bench;
    window.scrollTo(0, 0);
  }

  // Go back to bench selection
  onBack() {
    this.activeBench = null;
    window.scrollTo(0, 0);
  }
  // Open modal
  openModal(content) {
    this.modalService.open(content, { windowClass: 'bench-modal' });
  }

}
