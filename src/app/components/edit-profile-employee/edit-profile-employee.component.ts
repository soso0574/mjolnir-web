import { Component, OnInit, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-edit-profile-employee',
  templateUrl: './edit-profile-employee.component.html',
  styleUrls: ['./edit-profile-employee.component.scss'],
  providers: [NgbCarouselConfig]
})
export class EditProfileEmployeeComponent implements OnInit, OnDestroy {
  @Output() onSubscribe = new EventEmitter();
  @Output() onEndorsement = new EventEmitter();
  errorMessage: string;
  editDatas: any;
  modalRef: NgbModalRef;
  phoneEdit: false;
  emailEdit: false;
  webEdit: false;
  editOrg: false;
  editEmploymentHistory: false;
  editEducationHistory: false;
  @Output() onClose = new EventEmitter();

  /**
   * Creates an instance of the ProfilesComponent with the injected
   * NameListService.
   *
   * @param {DataListService} dataListService - The injected DataListService.
   */
  constructor(
    private dataListServices: DataListService,
    public config: NgbCarouselConfig,
    private modalService: NgbModal
  ) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
    this.getDataList('../../assets/data/dataEditProfileEmployee.json');
  }

  ngOnDestroy() {
    if (this.modalRef !== undefined) {
      this.modalRef.close();
    }
    document.body.classList.remove('modal-open');
    this.onClose.emit(null);
  }

  // Modal open function
  openModal(content, value, className) {
    this.modalRef = this.modalService.open(content, {
      windowClass: 'edit-profiles-modal' + ' ' + className,
      backdrop: value || true
    });
  }

  // subscibe list open
  subscribe() {
    this.onSubscribe.emit(this.editDatas['subscription']);
  }

  // endorse modal list open
  endorse(model) {
    this.onEndorsement.emit(this.editDatas[model]);
  }

  /**
   * Handle the dataListService observable
   */
  getDataList(jsonUrl) {
    this.dataListServices.get(jsonUrl)
      .subscribe(
        data => this.editDatas = data,
        error => this.errorMessage = <any>error
      );
  }

  // Delete admin lists
  delete(model, idx) {
    this.editDatas[model].splice(idx, 1);
  }

  // Delete admin lists
  add(model, fName, lName) {
    if (model === 'admin') {
      document.body.classList.add('modal-open');
    }

    if (typeof fName !== 'undefined' || typeof lName !== 'undefined') {
      this.editDatas[model].push({
        name: fName + ' ' + lName
      });
    }
  }

  // Add photo modal
  addPhotos(model) {
    this.editDatas[model].push({
      'imageUrl': '/assets/i/hospital-item2.jpg'
    });
  }

  // Review modal
  review() {
    document.body.classList.add('modal-open');
  }

  // select the dropdown value of Mondy in Step 6
  selectMondayDropdown() {
    const startValue = this.editDatas['availability']['MondayStartModelDropdown'].defaultText;
    const endValue = this.editDatas['availability']['MondayEndModelDropdown'].defaultText;

    this.editDatas['availability']['TuesdayStartModelDropdown'].defaultText = startValue;
    this.editDatas['availability']['TuesdayEndModelDropdown'].defaultText = endValue;

    this.editDatas['availability']['WednesdayStartModelDropdown'].defaultText = startValue;
    this.editDatas['availability']['WednesdayEndModelDropdown'].defaultText = endValue;

    this.editDatas['availability']['ThursdayStartModelDropdown'].defaultText = startValue;
    this.editDatas['availability']['ThursdayEndModelDropdown'].defaultText = endValue;

    this.editDatas['availability']['FridayStartModelDropdown'].defaultText = startValue;
    this.editDatas['availability']['FridayEndModelDropdown'].defaultText = endValue;
  }

}
