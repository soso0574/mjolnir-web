import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-employer-friends',
  templateUrl: './employer-friends.component.html',
  styleUrls: ['./employer-friends.component.scss']
})
export class EmployerFriendsComponent {
  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataFriendsEmployer.json';
}
