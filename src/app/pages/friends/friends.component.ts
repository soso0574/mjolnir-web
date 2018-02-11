import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DataListService } from '../../shared/data-list/data-list.service';

let selectedElem: any ;

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  showRightPanel = {
    isShown: false
  };
  errorMessage: string;
  friendsData: any;
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
  constructor(
    public dataListService: DataListService,
    private modalService: NgbModal
  ) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataFriends.json');
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
