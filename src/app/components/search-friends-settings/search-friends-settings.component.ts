import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-friends-settings',
  templateUrl: './search-friends-settings.component.html',
  styleUrls: ['./search-friends-settings.component.scss']
})
export class SearchFriendsSettingsComponent implements OnInit, OnDestroy {
  @Input() userRole: string;
  @Input() dropdown: any;
  @Output() filter = new EventEmitter();
  sugguestList = [];
  locationDrop = '';
  filterName = '';

  @ViewChild('saveFilterModal') saveFilterModal: any;
  saveFilterModalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * OnDestroy
   */
  ngOnDestroy() {
    if (this.saveFilterModalRef !== undefined) {
      this.saveFilterModalRef.close();
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

  // click Save Filter button
  clickSaveFilter() {
    this.saveFilterModalRef = this.openModalWindow(this.saveFilterModal);
  }

  selectFilter(filter: string) {
    this.filter.emit(filter);
  }


  // Auto complete for Location
  selectLocation(model) {
    const searched_text = model.trim();
    if (searched_text === '') {
      this.sugguestList = [];
      return;
    }
    const sugguestList_temp = [];
    this.dropdown['locationDropdown']['locations'].forEach(function(item, index){
      if (item['place'].toLowerCase().indexOf(searched_text.toLowerCase()) > -1
        || item['zip'].toLowerCase().indexOf(searched_text.toLowerCase()) > -1) {
        sugguestList_temp.push(item);
      }
    });
    this.sugguestList = sugguestList_temp;
  }
}
