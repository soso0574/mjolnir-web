import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded ProfilesComponent.
 */
@Component({
  selector: 'app-sd-profiles',
  templateUrl: 'profiles.component.html',
  styleUrls: ['profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  errorMessage: string;
  dataList: any[] = [];
  carListFriends: any[] = [];
  carListOpportunities: any[] = [];

  tabIndex = 0;
  showProfilePopup = false;

  showRightPanel = {
    isShown: false
  };

  /**
   * Creates an instance of the ProfilesComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataProfile.json');
  }

  initData() {
    this.carListFriends = this.dataList['carListFriends'];
    this.carListOpportunities = this.dataList['carListOpportunities'];

    const firstCardFriends = this.carListFriends[0];
    this.carListFriends.splice((0), 1);
    this.carListFriends.push(firstCardFriends);

    const firstCardOpportunities = this.carListOpportunities[0];
    this.carListOpportunities.splice((0), 1);
    this.carListOpportunities.push(firstCardOpportunities);
  }

  // click Prev icon
  prevCard(cardListItem) {
    const firstCard = cardListItem[0];
    cardListItem.splice((0), 1);

    setTimeout( () => {
      cardListItem.push(firstCard);
    }, 1);
  }

  // click Next icon
  nextCard(cardListItem) {
    const lastCard = cardListItem[cardListItem.length - 1];
    cardListItem.splice((cardListItem.length - 1), 1);

    setTimeout( () => {
      cardListItem.unshift(lastCard);
    }, 1);
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
