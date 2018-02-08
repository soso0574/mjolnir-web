import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bench-edit',
  templateUrl: './bench-edit.component.html',
  styleUrls: ['./bench-edit.component.scss']
})
export class BenchEditComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() data: any;
  @Output() onBack = new EventEmitter();
  today = new Date();
  dates: any;
  times: any;
  bags = 'bag-one';
  options = {
    revertOnSpill: true,
    direction: 'horizontal',
  };

  constructor(
    private modalService: NgbModal,
    private dragulaService: DragulaService,
  ) {
    this.dragulaService.setOptions('bag-one', this.options);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dragulaService.destroy('bag-one'); // destroy dragula bag
  }

  ngOnDestroy() {
    this.dragulaService.destroy('bag-one'); // destroy dragula bag
  }

  // Enable Dragg and Drop
  editing() {
    if (this.bags.length > 0) {
      this.dragulaService.setOptions('bag-one', this.options);
      this.bags = '';
    } else {
      this.bags = 'bag-one';
      this.dragulaService.destroy('bag-one'); // destroy dragula bag
    }
  }

  // Send $eent to parent component
  back() {
    this.onBack.emit(null);
  }

  // Open modal
  openModal(content) {
    this.modalService.open(content, { windowClass: 'bench-modal' });
  }
}
