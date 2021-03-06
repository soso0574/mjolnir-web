import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded LandingComponent.
 */
@Component({
  selector: 'app-sd-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.scss']
})
export class LandingComponent implements OnInit {
  errorMessage: string;
  dataList: any[] = [];
  showMobileLandingPage = false;
  isAndroid = false;
  isiOS = false;

  scrolled = false;

  /**
   * Creates an instance of the LandingComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService) {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataLanding.json');

    const u = navigator.userAgent;
    this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android device
    this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios device
    if (this.isAndroid || this.isiOS) {
      this.showMobileLandingPage = true;
    }
  }

  initData() {
  }

  // scroll the window
  @HostListener('window:scroll', []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (verticalOffset > 0) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
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
