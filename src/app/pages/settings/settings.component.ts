import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DataListService } from '../../shared/data-list/data-list.service';

const defaultPanels = {
  notifyPanel: false,
  emailPanel: false,
  passwordPanel: false,
  purchasePanel: false,
  legalPanel: false
};

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  panels = {
    ...defaultPanels
  };
  errorMessage: string;
  showRightPanel = {
    isShown: false
  };
  headerMenus = [
    {'name': 'friends', 'url': '/friends'},
    {'name': 'profiles', 'url': '/profiles'},
    {'name': 'benches', 'url': '/benches'}
  ];

  settingsList: any[];

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
    this.getDataList('../../assets/data/dataSettings.json');
  }

  /**
   * Handle the dataListService observable
   */
  getDataList(jsonUrl) {
    this.dataListService.get(jsonUrl)
      .subscribe(
        data => this.settingsList = data,
        error => this.errorMessage = <any>error,
      );
  }

  // Expand / Collapse Each panel
  expandCollapse(model, value) {
    this.panels = {...defaultPanels}, // collapse all panel before expand
    this.panels[model] = value;
  }

  // Modal open function
  openModal(content) {
    this.modalService.open(content, { windowClass: 'settings-modal' });
  }

}
