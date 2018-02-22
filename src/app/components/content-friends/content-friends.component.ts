import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DataListService } from '../../shared/data-list/data-list.service';

let selectedElem: any ;

@Component({
  selector: 'app-content-friends',
  templateUrl: './content-friends.component.html',
  styleUrls: ['./content-friends.component.scss']
})
export class ContentFriendsComponent implements OnInit {
  @Input() jsonFile: string;
  errorMessage: string;
  friendsData: any;

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
  constructor(
    public dataListService: DataListService,
    private modalService: NgbModal
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
        data => this.friendsData = data,
        error => this.errorMessage = <any>error,
      );
  }
  // Open Modal
  openModal(content) {
    this.modalService.open(content, { windowClass: 'friends-modal' });
  }
  // Selected model
  selected(model, idx) {
    selectedElem = {
      model: model,
      index: idx
    };
  }
  // cancel trash
  cancel(model, idx) {
    selectedElem = {};
  }
  // trashed
  trashed() {
    this.friendsData[selectedElem['model']].splice(selectedElem['index'], 1);
  }
}
