import { Component, OnInit, OnDestroy, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { keys } from 'lodash';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-create-employee-account',
  templateUrl: './create-employee-account.component.html',
  styleUrls: ['./create-employee-account.component.scss']
})
export class CreateEmployeeAccountComponent implements OnInit, OnDestroy {
   @Input() newEmployee: boolean;
   @Output() onEmployee = new EventEmitter();
   errorMessage: string;
   dataList: any[] = [];

   currentStep = 0;
   completedStep = -1;
   totalStep: number;
   sugguestList = [];
   activePersonal = 0;
   activeSchool = 0;
   dCol = '';
   scrollOffset = 50;
   formData: any;
   places = {lat: -25.363, lng: 131.044};
   mapView = false;
   today = new Date();
   dates: any;


  @ViewChild('waringModal') waringModal;
  @ViewChild('importPhotosModal') importPhotosModal;
  @ViewChild('createOfficeModal') createOfficeModal;
   modalRef: NgbModalRef;

  /**
   * Creates an instance of the CreateBusinessAccountComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(
    public dataListService: DataListService,
    private modalService: NgbModal
  ) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataCreateEmployeeForm.json');
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

  initData() {
    this.formData = this.dataList;
    this.totalStep = keys(this.dataList).length;
    // SET YEAR OPTIONS
    for (let i = 1900; i <= 2009; i++) {
      this.formData['somePersonalDetails']['year'].optionList.push({
        "optionName": i
      })
    }
    // SET DATE OPTIONS
    for (let i = 1; i <= 31; i++) {
      this.formData['somePersonalDetails']['date'].optionList.push({
        "optionName": i
      })
    }

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

  // reset form
  resetForm() {
    this.currentStep = 0;
    this.completedStep = -1;
    this.openModal(this.waringModal, 'static');
    window.scrollTo(0, 0);
  }

  // change Business Name
  changeSchool(idx) {
    const searched_text = this.formData['eduHistory']['schools'][idx].school.trim();
    if (searched_text === '') {
      this.sugguestList = [];
      return;
    }
    const sugguestList_temp = [];
    this.formData['eduHistory'].schoolList.forEach(function(item, index){
      if (item['label'].toLowerCase().indexOf(searched_text.toLowerCase()) > -1) {
        sugguestList_temp.push(item);
      }
    });
    this.activeSchool = idx;
    this.sugguestList = sugguestList_temp;
  }

  // Auto complete for personal
  changePersonal(model, field, list) {
    const searched_text = this.formData['somePersonalDetails'][model][field].trim();
    if (searched_text === '') {
      this.sugguestList = [];
      return;
    }
    const sugguestList_temp = [];
    this.formData['somePersonalDetails'][model][list].forEach(function(item, index){
      if (item['label'].toLowerCase().indexOf(searched_text.toLowerCase()) > -1) {
        sugguestList_temp.push(item);
      }
    });
    this.activePersonal = field;
    this.sugguestList = sugguestList_temp;
  }

  goToStep(index) {
    switch (this.currentStep) {
      case 0:
        if (this.formData['somePersonalDetails']['location'].defaultText === 'City'
        || this.formData['somePersonalDetails']['zip'].defaultText === 'Zip Code') {
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
    // show modal window in "Let's add some photos" step
    if (index === 3) {
      this.openModal(this.importPhotosModal, true);
    }

    if (index === 13) {
      this.mapView = true;
    }

    this.currentStep = index;
  }

  // change inputs of step
  changeInputStep(stepIndex) {
    let pass = true;
    switch (stepIndex) {
      case 0:
        if (this.formData['somePersonalDetails']['location'].defaultText === 'City'
        || this.formData['somePersonalDetails']['zip'].defaultText === 'Zip Code') {
            pass = false;
        }
        break;
      default:
        break;
    }
    // pass to next step
    if (pass) {
      if (this.completedStep < stepIndex) {
        this.goToStep(stepIndex + 1);
      }
    }
  }

  // skip to end
  skipStep(index) {
    this.completedStep = index - 1;
    this.currentStep = index;
  }

  // on change pic
  onChangePic(event, target) {
    target.src = '../../../assets/i/strak-iphone.png';

    let needNew = true;
    if (this.formData['upload']['step4BigPic'].src === '') {
      needNew = false;
    }

    this.formData['upload']['step4RightPicList'].forEach(function(item, index) {
      if (item.src === '') {
        needNew = false;
      }
    });

    this.formData['upload']['step4BottomPicList'].forEach(function(item, index) {
      if (item.src === '') {
        needNew = false;
      }
    });

    if (needNew) {
      this.formData['upload']['step4BottomPicList'].push({
        'src': ''
      });
    }
  }

  // select the dropdown value of Mondy in Step 6
  selectMondayDropdown() {
    const startValue = this.formData['availability']['MondayStartModelDropdown'].defaultText;
    const endValue = this.formData['availability']['MondayEndModelDropdown'].defaultText;

    this.formData['availability']['TuesdayStartModelDropdown'].defaultText = startValue;
    this.formData['availability']['TuesdayEndModelDropdown'].defaultText = endValue;

    this.formData['availability']['WednesdayStartModelDropdown'].defaultText = startValue;
    this.formData['availability']['WednesdayEndModelDropdown'].defaultText = endValue;

    this.formData['availability']['ThursdayStartModelDropdown'].defaultText = startValue;
    this.formData['availability']['ThursdayEndModelDropdown'].defaultText = endValue;

    this.formData['availability']['FridayStartModelDropdown'].defaultText = startValue;
    this.formData['availability']['FridayEndModelDropdown'].defaultText = endValue;
  }

  // Add another business
  addAnotherBusiness() {
    this.formData['emHistory']['business'].push({
      'businessName': '',
      'jobTitle': '',
      'sDate': '',
      'eDate': ''
    });
  }

  // Add another school
  addAnotherSchool() {
    this.formData['eduHistory']['schools'].push({
      'school': '',
      'degree': '',
      'sDate': '',
      'eDate': '',
      'activitiesSociety': '',
      'description': ''
    });
  }

  // Add another location
  addAnotherLocation() {
    this.mapView = false;
    this.formData['workLocation']['locations'].push({
      'place': 'HELL’S KITCHEN, NEW YORK'
    });
  }

  // go to gotoEmployer
  gotoEmployer() {
    this.onEmployee.emit('business');
  }
}
