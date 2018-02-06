import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  @ViewChild('waringModal') waringModal;
  modalRef: NgbModalRef;
  /**
   * Creates an instance of the RegisterFramePageComponent
   *
   */
  constructor(
    router: Router,
    private modalService: NgbModal
  ) {}

  /**
   * OnInit
   */
  ngOnInit() {
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
    this.openModal(this.waringModal, 'static');
    this.contents = event;
  }
}
