import { Component, OnInit, AfterViewInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import {NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-endoresments',
  templateUrl: './endoresments.component.html',
  styleUrls: ['./endoresments.component.scss']
})
export class EndoresmentsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() backToEdit = new EventEmitter();
  @Input() data: any;
  modalRef: NgbModalRef;
  editView: boolean;
  bags = 'bag-one';
  options = {
    revertOnSpill: true,
    direction: 'vertical'
  };

  constructor(
    private dragulaService: DragulaService,
    private modalService: NgbModal
  ) {
    this.dragulaService.setOptions('bag-one', this.options);
  }

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dragulaService.destroy('bag-one'); // destroy dragula bag
  }

  ngOnDestroy() {
    if (this.modalRef !== undefined) {
      this.modalRef.close();
    }
    if (this.dragulaService.bags.length > 0) {
      this.dragulaService.destroy('bag-one'); // destroy dragula bag
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

  // Enable Dragg and Drop
  editing() {
    this.editView = !this.editView;
    if (this.bags.length > 0) {
      this.dragulaService.setOptions('bag-one', this.options);
      this.bags = '';
    } else {
      this.bags = 'bag-one';
      this.dragulaService.destroy('bag-one'); // destroy dragula bag
    }
  }
}
