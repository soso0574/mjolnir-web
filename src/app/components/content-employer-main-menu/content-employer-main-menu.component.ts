import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded MainMenuComponent.
 */
@Component({
  selector: 'app-sd-content-employer-main-menu',
  templateUrl: 'content-employer-main-menu.component.html',
  styleUrls: ['content-employer-main-menu.component.scss']
})
export class ContentEmployerMainMenuComponent implements OnInit, OnDestroy {
  @Input() jsonFile: string;
  @Input() selectedRoleItem: any[];
  @Input() userRole: string;

  errorMessage: string;
  dataList: any[] = [];

  scrollbarOptions = {
    axis: 'yx',
    theme: 'minimal-dark'
  };

  @ViewChild('createNewModal') createNewModal: any;
  createNewModalRef: NgbModalRef;

  /**
   * Creates an instance of the MainMenuComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService, private modalService: NgbModal) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList(this.jsonFile);
  }

  initData() {
    const temp_selectedRoleItem = this.selectedRoleItem;

    this.dataList.forEach(function(item, index) {
      if (item.selected) {
        temp_selectedRoleItem['imgUrl'] = item.imgUrl;
        temp_selectedRoleItem['title'] = item.title;
        temp_selectedRoleItem['smallTitle'] = item.smallTitle;
        temp_selectedRoleItem['number'] = item.number;
        temp_selectedRoleItem['employee'] = item.employee;
      }
    });

    this.selectedRoleItem = temp_selectedRoleItem;
  }

  /**
   * OnDestroy
   */
  ngOnDestroy() {
    if (this.createNewModalRef !== undefined) {
      this.createNewModalRef.close();
    }
  }

  // openModalWindow
  openModalWindow(modalId) {
    const modalRef = this.modalService.open(modalId);
    modalRef.result.then((result) => {
    }, (reason) => {
    });
    return modalRef;
  }

  // click Plus icon
  clickPlusIcon() {
    this.createNewModalRef = this.openModalWindow(this.createNewModal);
  }

  // click Item
  clickItem(clickedItem, clickedIndex) {
    this.selectedRoleItem['imgUrl'] = clickedItem.imgUrl;
    this.selectedRoleItem['title'] = clickedItem.title;
    this.selectedRoleItem['smallTitle'] = clickedItem.smallTitle;
    this.selectedRoleItem['number'] = clickedItem.number;
    this.selectedRoleItem['employee'] = clickedItem.employee;

    this.dataList.forEach(function(item, index) {
      item.selected = false;

      if (index === clickedIndex) {
        item.selected = true;
      }
    });
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
