import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal, NgbModalRef, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded ProfilesComponent.
 */
@Component({
  selector: 'app-sd-content-profiles',
  templateUrl: 'content-profiles.component.html',
  styleUrls: ['content-profiles.component.scss']
})
export class ContentProfilesComponent implements OnInit, OnDestroy {
  @Input() jsonFile: string;
  @Input() userRole: string;
  @Input() pageParam = {
    'showProfilePopup': false,
    'showRightPanel': {
      'isShown': false
    },
    subscribeData: [],
    endorseData: [],
    activeView: ''
  };

  errorMessage: string;
  dataList: any[] = [];
  carListFriends: any[] = [];
  carListOpportunities: any[] = [];

  tabIndex = 0;
  bottomButtons = false;

  editable: string;
  @ViewChild('profileEditModal') editModal;
  modalRef: NgbModalRef;

  activeSubscribe: any;


  /**
   * Creates an instance of the ProfilesComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(
    public dataListService: DataListService,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList(this.jsonFile);
    this.route.params
      .subscribe(params => {
        this.editable = params['edit'];
        if (typeof this.editable !== 'undefined') {
          setTimeout(() => {
            this.openModal(this.editModal, 'profiles-modal');
          }, 100);
        }
    });
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    if (this.modalRef !== undefined) {
      this.modalRef.close();
    }
  }

  // Modal open function
  openModal(content, className) {
    this.modalRef = this.modalService.open(content, {
      windowClass: className,
    });
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

  // Get subscription even emitter
  onSubscribe(data: any) {
    if (this.modalRef !== undefined) {
      this.modalRef.close();
    }
    this.pageParam.subscribeData = data;
    this.pageParam.activeView = 'subscribe';
    window.scrollTo(0, 0);
  }

  // Get subscription even emitter
  onEndorsement(data: any) {
    if (this.modalRef !== undefined) {
      this.modalRef.close();
    }
    this.pageParam.endorseData = data;
    this.pageParam.activeView = 'endorse';
    window.scrollTo(0, 0);
  }
}
