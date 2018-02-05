import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import {NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-endoresments',
  templateUrl: './endoresments.component.html',
  styleUrls: ['./endoresments.component.scss']
})
export class EndoresmentsComponent implements OnInit, OnDestroy {
  @Output() backToEdit = new EventEmitter();
  @Input() data: any;
  private modalRef: NgbModalRef;
  private editView: boolean;

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
    this.modalRef = this.modalService.open(content, { windowClass: 'endorse-modal' });
  }

  // delete
  delete(idx) {
    this.data.splice(idx, 1);
  }

  // backto edit
  backto() {
    this.backToEdit.emit(null);
  }
}
