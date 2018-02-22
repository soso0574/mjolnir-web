import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  selector: 'app-sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['../register/register.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  errorMessage: string;
  dataList: any[] = [];

  showForm = false;
  showPasswordText = false;

  showEmailEmptyError = false;
  showPasswordEmptyError = false;

  emailText = '';
  passwordText = '';

  modalErrorMessage = [];

  @ViewChild('errorModal') errorModal: any;
  errorModalRef: NgbModalRef;

  /**
   * Creates an instance of the LoginComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(private router: Router,
              private modalService: NgbModal,
              public dataListService: DataListService) {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataLoginForm.json');

    setTimeout( () => {
      this.showForm = true;
    }, 1500);
  }

  initData() {
  }

  /**
   * OnDestroy
   */
  ngOnDestroy() {
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

  // click 'Sign in' button
  clickSignIn() {
    let pass = true;
    this.modalErrorMessage = [];

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
      let matched = false;
      let userRole = '';
      const emailText = this.emailText;
      const passwordText = this.passwordText;

      this.dataList.forEach(function(item, index) {
        if (emailText === item.emailText
           && passwordText === item.passwordText) {
           matched = true;
           userRole = item.userRole;
        }
      });

      if (matched) {
        this.showEmailEmptyError = false;
        this.showPasswordEmptyError = false;

        this.router.navigate(['/' + userRole +  '-profiles']);
      } else {
        this.modalErrorMessage.push({
          'message': 'Email and Password are not correct'
        });

        this.showEmailEmptyError = true;
        this.showPasswordEmptyError = true;

        this.errorModalRef = this.openModalWindow(this.errorModal);
      }
    } else {
      this.errorModalRef = this.openModalWindow(this.errorModal);
    }
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

