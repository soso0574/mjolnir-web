import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

/**
 * This class represents the lazy loaded RegisterFramePageComponent.
 */
@Component({
  selector: 'app-sd-register-frame-page',
  templateUrl: 'register-frame-page.component.html',
  styleUrls: ['register-frame-page.component.scss']
})
export class RegisterFramePageComponent implements OnInit, OnDestroy {
  createProfile = '';
  contents = '';
  carousel_interval = 5000;
  createBusinessProfile: string;

  @ViewChild('waringModal') waringModal;
  @ViewChild('importProfileModal') importProfileModal;
  modalRef: NgbModalRef;
  /**
   * Creates an instance of the RegisterFramePageComponent
   *
   */
  constructor(
    router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.createBusinessProfile = params['createBusinessProfile'];
        if (typeof this.createBusinessProfile !== 'undefined') {
          this.createProfile = 'business';
          this.contents = 'business';
          this.openModal(this.importProfileModal, 'static');
        }
    });
  }

  /**
   * OnDestroy
   */
  ngOnDestroy() {
    if (this.modalRef !== undefined) {
      this.modalRef.close();
    }
  }

  // Modal open function
  openModal(content, value) {
    this.modalRef = this.modalService.open(content, {
      windowClass: 'steps-modal',
      backdrop: value || true
    });
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
    if (event === 'business') {
      this.openModal(this.waringModal, 'static');
    } else if (event === 'employee') {
      this.openModal(this.importProfileModal, 'static');
      this.createProfile = event;
    }
    this.contents = event;
  }

  onEmployee(event) {
    this.createProfile = '';
    this.openModal(this.importProfileModal, 'static');
    this.contents = event;
    this.createProfile = event;
    window.scrollTo(0, 0);
  }
}
