import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-subscription',
  templateUrl: './select-subscription.component.html',
  styleUrls: ['./select-subscription.component.scss']
})
export class SelectSubscriptionComponent implements OnInit, OnDestroy {
  @Output() backToEdit = new EventEmitter();
  @Input() data: any;
  modalRef: NgbModalRef;

  constructor(
    private modalService: NgbModal
  ) {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.modalRef !== undefined) {
      this.modalRef.close();
    }
  }

  // Modal open function
  openModal(content) {
    this.modalRef = this.modalService.open(content, { windowClass: 'boost-modal' });
  }

  // backto edit
  backto() {
    this.backToEdit.emit(null);
  }
}
