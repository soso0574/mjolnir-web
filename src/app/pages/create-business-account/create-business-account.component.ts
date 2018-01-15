import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

/**
 * This class represents the lazy loaded CreateBusinessAccountComponent.
 */
@Component({
  selector: 'app-sd-create-business-account',
  templateUrl: 'create-business-account.component.html',
  styleUrls: ['create-business-account.component.scss']
})
export class CreateBusinessAccountComponent implements OnInit, OnDestroy {
  errorMessage: string;
  dataList: any[] = [];

  currentStep = 0;
  completedStep = -1;

  placeholderListOld: any[] = [];
  placeholderList: any[] = [];

  formData: any[] = [];

  @ViewChild('waringModal') waringModal: any;
  @ViewChild('importProfileModal') importProfileModal: any;
  @ViewChild('createOfficeModal') createOfficeModal: any;
  waringModalRef: NgbModalRef;
  importProfileModalRef: NgbModalRef;
  createOfficeModalRef: NgbModalRef;

  /**
   * Creates an instance of the CreateBusinessAccountComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(public dataListService: DataListService,
              private modalService: NgbModal,
              private router: Router) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataCreateBusinessAccountForm.json');

    setTimeout( () => {
      this.waringModalRef = this.openModalWindow(this.waringModal);
    }, 1000);
  }

  initData() {
    this.placeholderListOld = this.dataList['placeholderListOld'];
    this.placeholderList = this.dataList['placeholderList'];
    this.formData = this.dataList['formData'];
  }

  /**
   * OnDestroy
   */
  ngOnDestroy() {
    if (this.waringModalRef !== undefined) {
      this.waringModalRef.close();
    }

    if (this.importProfileModalRef !== undefined) {
      this.importProfileModalRef.close();
    }

    if (this.createOfficeModalRef !== undefined) {
      this.createOfficeModalRef.close();
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

  // click Ok In First Modal
  clickOkInFirstModal() {
    this.importProfileModalRef = this.openModalWindow(this.importProfileModal);
  }

  // reset form
  resetForm() {
    this.currentStep = 0;
    this.completedStep = -1;
    this.waringModalRef = this.openModalWindow(this.waringModal);
    window.scrollTo(0, 0);
  }

  // go to Profile page
  goToProfile() {
    this.router.navigate(['/profiles']);
  }

  // focus on input
  emptyPlaceholder(name) {
    this.placeholderList[name] = '';
  }

  // leave input
  fillPlaceholder(name) {
    this.placeholderList[name] = this.placeholderListOld[name];
  }

  // go to step
  goToStep(index) {
    switch (this.currentStep) {
      case 0:
        if (this.formData[0]['Business Name'] === ''
        || this.formData[0]['Business Address'] === ''
        || this.formData[0]['City'] === ''
        || this.formData[0]['Zip Code'] === ''
        || this.formData[0]['Phone Number'] === '') {
          return;
        }
        break;
      case 4:
        if (this.formData[0]['Office Website'] === ''
        || this.formData[0]['Office Email Address'] === ''
        || this.formData[0]['Office Phone Number'] === ''
        || this.formData[0]['Preferred OptionModelDropdown'].defaultText === 'Preferred Option'
        || this.formData[0]['Alternate OptionModelDropdown'].defaultText === 'Alternate Option') {
          return;
        }
        break;
      default:
        break;
    }

    if (index > (this.completedStep + 2)) {
      return;
    }

    if (index > this.currentStep) {
      if (index > this.completedStep) {
        this.completedStep = index - 1;
      }
    }

    this.currentStep = index;

    if (index === 11) {
      this.createOfficeModalRef = this.openModalWindow(this.createOfficeModal);
    }
  }

  // skip to end
  skipStep(index) {
    this.completedStep = index - 1;

    this.currentStep = index;

    if (index === 11) {
      this.createOfficeModalRef = this.openModalWindow(this.createOfficeModal);
    }
  }

  // change inputs of step
  changeInputStep(stepIndex) {
    let pass = true;
    switch (stepIndex) {
      case 0:
        if (this.formData[0]['Business Name'] === ''
        || this.formData[0]['Business Address'] === ''
        || this.formData[0]['City'] === ''
        || this.formData[0]['Zip Code'] === ''
        || this.formData[0]['Phone Number'] === '') {
          pass = false;
        }
        break;
      case 4:
        if (this.formData[0]['Office Website'] === ''
        || this.formData[0]['Office Email Address'] === ''
        || this.formData[0]['Office Phone Number'] === ''
        || this.formData[0]['Preferred OptionModelDropdown'].defaultText === 'Preferred Option'
        || this.formData[0]['Alternate OptionModelDropdown'].defaultText === 'Alternate Option') {
          pass = false;
        }
        break;
      default:
        break;
    }

    if (pass) {
      if (this.completedStep < stepIndex) {
        this.goToStep(stepIndex + 1);
      }
    }
  }

  // on change pic
  onChangePic(event, target) {
    target.src = '../../../assets/i/strak-iphone.png';

    let needNew = true;
    if (this.formData[0]['step4BigPic'].src === '') {
      needNew = false;
    }

    this.formData[0]['step4RightPicList'].forEach(function(item, index) {
      if (item.src === '') {
        needNew = false;
      }
    });

    this.formData[0]['step4BottomPicList'].forEach(function(item, index) {
      if (item.src === '') {
        needNew = false;
      }
    });

    if (needNew) {
      this.formData[0]['step4BottomPicList'].push({
        'src': ''
      });
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
