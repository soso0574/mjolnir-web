import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { DataListService } from '../../shared/data-list/data-list.service';


@Component({
  selector: 'app-content-benches',
  templateUrl: './content-benches.component.html',
  styleUrls: ['./content-benches.component.scss']
})
export class ContentBenchesComponent implements OnInit {
   @Input() userRole: string;
   @Input() jsonFile: string;
   errorMessage: string;
   benches: any[];
   activeBench: any[];
   benchName = '';
   dates = new Date();

  scrollbarOptions = {
    axis: 'yx',
    theme: 'minimal-dark'
  };

  /**
   * Creates an instance of the NotificationOfflineComponent with the injected
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
    this.getDataList(this.jsonFile);
  }

  /**
   * Handle the dataListService observable
   */
  getDataList(jsonUrl) {
    this.dataListService.get(jsonUrl)
      .subscribe(
        data => this.benches = data,
        error => this.errorMessage = <any>error,
      );
  }

  // Select bench
  benchSelect(bench) {
    this.activeBench = bench;
    window.scrollTo(0, 0);
  }

  // Go back to bench selection
  onBack() {
    this.activeBench = null;
    window.scrollTo(0, 0);
  }
  // Open modal
  openModal(content) {
    this.modalService.open(content, { windowClass: 'bench-modal' });
  }

  // Add new Benche
  addBench() {
    if (this.benchName.length === 0) {
      return;
    }
    this.benches['benchList'].push({
      'name': this.benchName,
      'lists': [
        {
          'imageUrl': '/assets/i/friends-users/friends-user9.jpg',
          'role': 'Hygienist',
          'name': 'Kyle Bourne',
          'experience': 7
        },
        {
          'imageUrl': '/assets/i/friends-users/friends-user1.jpg',
          'role': 'Hygienist',
          'name': 'Kyle Bourne',
          'experience': 7
        },
        {
          'imageUrl': '/assets/i/friends-users/friends-user7.jpg',
          'role': 'Orthodontist',
          'name': 'Lyanna Stark',
          'experience': 7
        },
        {
          'imageUrl': '/assets/i/friends-users/friends-user8.jpg',
          'role': 'Periodontist',
          'name': 'Jack Riley',
          'experience': 7
        },
        {
          'imageUrl': '/assets/i/friends-users/friends-user1.jpg',
          'role': 'Hygienist',
          'name': 'Kyle Bourne',
          'experience': 7
        },
        {
          'imageUrl': '/assets/i/friends-users/friends-user7.jpg',
          'role': 'Orthodontist',
          'name': 'Lyanna Stark',
          'experience': 7
        },
        {
          'imageUrl': '/assets/i/friends-users/friends-user1.jpg',
          'role': 'Hygienist',
          'name': 'Kyle Bourne',
          'experience': 7
        },
        {
          'imageUrl': '/assets/i/friends-users/friends-user7.jpg',
          'role': 'Orthodontist',
          'name': 'Lyanna Stark',
          'experience': 7
        },
        {
          'imageUrl': '/assets/i/friends-users/friends-user8.jpg',
          'role': 'Periodontist',
          'name': 'Jack Riley',
          'experience': 7
        },
        {
          'imageUrl': '/assets/i/friends-users/friends-user9.jpg',
          'role': 'Hygienist',
          'name': 'Kyle Bourne',
          'experience': 7
        },
        {
          'imageUrl': '/assets/i/friends-users/friends-user8.jpg',
          'role': 'Periodontist',
          'name': 'Jack Riley',
          'experience': 7
        }
      ]
    });
    this.benchName = '';
  }
}
