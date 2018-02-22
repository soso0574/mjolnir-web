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
  sugguestList = [];

  formData: any[] = [];

  @ViewChild('waringModal') waringModal: any;
  @ViewChild('importProfileModal') importProfileModal: any;
  @ViewChild('importPhotosModal') importPhotosModal: any;
  @ViewChild('createOfficeModal') createOfficeModal: any;
  waringModalRef: NgbModalRef;
  importProfileModalRef: NgbModalRef;
  importPhotosModalRef: NgbModalRef;
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
    const modalRef = this.modalService.open(modalId, {
      windowClass: 'steps-modal',
    });
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
    this.router.navigate(['/employer-profiles']);
  }

  // focus on input
  emptyPlaceholder(name) {
    this.placeholderList[name] = '';
  }

  // leave input
  fillPlaceholder(name) {
    this.placeholderList[name] = this.placeholderListOld[name];
  }

  // select the dropdown value of Mondy in Step 6
  selectMondayDropdown() {
    const startValue = this.formData[0]['MondayStartModelDropdown'].defaultText;
    const endValue = this.formData[0]['MondayEndModelDropdown'].defaultText;

    this.formData[0]['TuesdayStartModelDropdown'].defaultText = startValue;
    this.formData[0]['TuesdayEndModelDropdown'].defaultText = endValue;

    this.formData[0]['WednesdayStartModelDropdown'].defaultText = startValue;
    this.formData[0]['WednesdayEndModelDropdown'].defaultText = endValue;

    this.formData[0]['ThursdayStartModelDropdown'].defaultText = startValue;
    this.formData[0]['ThursdayEndModelDropdown'].defaultText = endValue;

    this.formData[0]['FridayStartModelDropdown'].defaultText = startValue;
    this.formData[0]['FridayEndModelDropdown'].defaultText = endValue;
  }

  // click Add Another Administrator button in Step 7
  addAnotherAdmin() {
    this.formData[0]['step7AdminList'].push(
      {
        'First Name1': '',
        'Last Name1': '',
        'Add Email Mobile Number1': '',
        'step7TopCheckList': [
          {
            'label': 'Edit Office Profile',
            'checked': false
          },
          {
            'label': 'Manage Interview Requests',
            'checked': false
          }
        ],
        'step7BottomCheckList': [
          {
            'label': 'Add/Edit Benches',
            'checked': false
          },
          {
            'label': 'Manage Match Requests',
            'checked': false
          }
        ]
      }
    );
  }

  // click Add Another Peer button of General Endorsement section in Step 8
  addAnotherGeneralEndorsement() {
    this.formData[0]['step8Content']['generalEndorsementList'].push(
      {
        'First Name2': '',
        'Last Name2': '',
        'Add Email Mobile Number2': ''
      }
    );
  }

  // click Add Another Peer button of Professional Endorsement section in Step 8
  addAnotherProfessionalEndorsement() {
    this.formData[0]['step8Content']['professionalEndorsementList'].push(
      {
        'First Name3': '',
        'Last Name3': '',
        'Add Email Mobile Number3': ''
      }
    );
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
        || this.formData[0]['Preferred Contact OptionModelDropdown'].defaultText === 'Preferred Contact Option'
        || this.formData[0]['Alternate Contact OptionModelDropdown'].defaultText === 'Alternate Contact Option') {
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

    // show modal window in "Let's add some photos" step
    if (index === 3) {
      this.openModalWindow(this.importPhotosModal);
    }

    // show modal window in "Link your online reviews" step
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
        || this.formData[0]['Preferred Contact OptionModelDropdown'].defaultText === 'Preferred Contact Option'
        || this.formData[0]['Alternate Contact OptionModelDropdown'].defaultText === 'Alternate Contact Option') {
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

  // change Business Name
  changeBusinessName() {
    const searched_text = this.formData[0]['Business Name'].trim();
    if (searched_text === '') {
      this.sugguestList = [];
      return;
    }

    const sugguestList_temp = [];
    this.formData[0]['Business Name Sugguest List'].forEach(function(item, index){
      if (item['label'].toLowerCase().indexOf(searched_text.toLowerCase()) > -1) {
        sugguestList_temp.push(item);
      }
    });

    this.sugguestList = sugguestList_temp;
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
