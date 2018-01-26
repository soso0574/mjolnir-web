import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded LeftCarouselComponent.
 */
@Component({
  selector: 'app-sd-left-carousel',
  templateUrl: 'left-carousel.component.html',
  styleUrls: ['left-carousel.component.scss']
})
export class LeftCarouselComponent implements OnInit {
  @Input() interval = 5000;

  errorMessage: string;
  dataList: any[] = [];

  stepIndex = -1;

  currentIndex = 0;
  shownIndex = -1;
  shownFlag = false;

  @ViewChild('carouselOverview') carouselOverview: any;

  /**
   * Creates an instance of the LeftCarouselComponent
   *
   */
  constructor(public dataListService: DataListService) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataLeftCarousel.json');
  }

  initData() {
  }

  // click dot
  clickDot(id) {
    this.currentIndex = parseInt(id.replace('Overview_', ''), 10);
    this.shownIndex = this.currentIndex;
    this.shownFlag = true;

    setTimeout( () => {
      this.carouselOverview.select(id);
    }, 1000);
  }

  // slide
  slideCarousel(event) {
    this.currentIndex = parseInt(event.current.replace('Overview_', ''), 10);

    if (this.shownFlag) {
      this.shownFlag = false;
    } else {
      this.shownIndex = -1;
    }
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

