import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal, NgbModalRef, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-profile-read-only',
  templateUrl: './profile-read-only.component.html',
  styleUrls: ['./profile-read-only.component.scss']
})
export class ProfileReadOnlyComponent implements OnInit, OnDestroy {
  errorMessage: string;
  editDatas: any;
  modalRef: NgbModalRef;
  aboutEdit: false;
  phoneEdit: false;
  emailEdit: false;
  webEdit: false;
  places = {lat: -25.363, lng: 131.044};

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
    this.getDataList('../../assets/data/dataEditProfile.json');
  }

  ngOnDestroy() {
    if (this.modalRef !== undefined) {
      this.modalRef.close();
    }
    document.body.classList.remove('modal-open');
  }

  // Modal open function
  openModal(content, value) {
    this.modalRef = this.modalService.open(content, {
      windowClass: 'edit-profiles-modal',
      backdrop: value || true
    });
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

  // Close modal
  closeModal() {
    document.body.classList.add('modal-open');
  }

}
