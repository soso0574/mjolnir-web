import { Component, OnInit, OnDestroy, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

/**
 * This class represents the lazy loaded RegisterComponent.
 */
@Component({
  selector: 'app-sd-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  showForm = false;
  showPasswordText = false;

  showFullNameEmptyError = false;
  showEmailEmptyError = false;
  showPasswordEmptyError = false;

  fullNameText = '';
  emailText = '';
  passwordText = '';

  pageStep = 0;
  selectedSocialIndex = 0;
  selectedProfile = 'business';

  modalErrorMessage = [];

  @ViewChild('waringModal') waringModal: any;
  @ViewChild('errorModal') errorModal: any;
  waringModalRef: NgbModalRef;
  errorModalRef: NgbModalRef;

  @Output() stopCarousel: EventEmitter<string> = new EventEmitter();
  @Output() resumeCarousel: EventEmitter<string> = new EventEmitter();
  @Output() changedContent: EventEmitter<string> = new EventEmitter();

  /**
   * Creates an instance of the RegisterComponent
   *
   */
  constructor(private router: Router,
              private modalService: NgbModal) {}

  /**
   * OnInit
   */
  ngOnInit() {
    setTimeout( () => {
      this.showForm = true;
    }, 1500);
  }

  /**
   * OnDestroy
   */
  ngOnDestroy() {
    if (this.waringModalRef !== undefined) {
      this.waringModalRef.close();
    }

    if (this.errorModalRef !== undefined) {
      this.errorModalRef.close();
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

  // click Eye icon
  clickEye() {
    this.showPasswordText = !this.showPasswordText;
  }

  // click 'Create your account' button
  clickCreateYourAccount() {
    let pass = true;
    this.modalErrorMessage = [];

    if (this.fullNameText === '') {
      this.showFullNameEmptyError = true;
      pass = false;
      this.modalErrorMessage.push({
        'message': 'Your Full Name must be filled'
      });
    } else {
      this.showFullNameEmptyError = false;
    }

    if (this.emailText === '') {
      this.showEmailEmptyError = true;
      pass = false;
      this.modalErrorMessage.push({
        'message': 'Email must be filled'
      });
    } else if (!this.checkMail(this.emailText)) {
      this.showEmailEmptyError = true;
      pass = false;
      this.modalErrorMessage.push({
        'message': 'Email must be a valid email'
      });
    } else {
      this.showEmailEmptyError = false;
    }

    if (this.passwordText === '') {
      this.showPasswordEmptyError = true;
      pass = false;
      this.modalErrorMessage.push({
        'message': 'Password must be filled'
      });
    } else {
      this.showPasswordEmptyError = false;
    }

    if (pass) {
      this.pageStep = 1;
      this.waringModalRef = this.openModalWindow(this.waringModal);
      this.stopCarousel.emit('');
    } else {
      this.errorModalRef = this.openModalWindow(this.errorModal);
    }
  }

  // click 'Now the fun begins' button
  clickNowTheFunBegins() {
    this.pageStep = 2;
    this.resumeCarousel.emit('');
  }

  // click 'Let's Start' button
  clickLetsStart() {
    this.changedContent.emit('Show Create Business Account');
  }

  // check email format
  checkMail(mail) {
    const filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(mail)) {
      return true;
    } else {
      return false;
    }
  }
}
