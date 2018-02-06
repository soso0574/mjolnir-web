import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bench-edit',
  templateUrl: './bench-edit.component.html',
  styleUrls: ['./bench-edit.component.scss']
})
export class BenchEditComponent implements OnInit, OnDestroy {
  @Input() data: any;
  @Output() onBack = new EventEmitter();
  today = new Date();
  dates: any;
  times: any;

  constructor(
    private modalService: NgbModal,
    private dragulaService: DragulaService,
  ) {
    dragulaService.setOptions('bag-one', {
      revertOnSpill: true
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.dragulaService.destroy('bag-one'); // destroy dragula bag
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
