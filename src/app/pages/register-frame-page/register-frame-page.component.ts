import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded RegisterFramePageComponent.
 */
@Component({
  selector: 'app-sd-register-frame-page',
  templateUrl: 'register-frame-page.component.html',
  styleUrls: ['register-frame-page.component.scss']
})
export class RegisterFramePageComponent implements OnInit {
  isShowCreateBusinessAccount = false;
  carousel_interval = 5000;

  /**
   * Creates an instance of the RegisterFramePageComponent
   *
   */
  constructor(private router: Router) {}

  /**
   * OnInit
   */
  ngOnInit() {
  }

  // stop carousel
  stopCarousel(event) {
    this.carousel_interval = 0;
  }

  // resume carousel
  resumeCarousel(event) {
    this.carousel_interval = 5000;
  }

  // changed Content
  changedContent(event) {
    if (event === 'Show Create Business Account') {
      this.isShowCreateBusinessAccount = true;
    }
  }
}
