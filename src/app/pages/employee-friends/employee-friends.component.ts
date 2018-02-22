import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DataListService } from '../../shared/data-list/data-list.service';

@Component({
  selector: 'app-employee-friends',
  templateUrl: './employee-friends.component.html',
  styleUrls: ['./employee-friends.component.scss']
})
export class EmployeeFriendsComponent {
  showRightPanel = {
    isShown: false
  };

  jsonFile = '../../assets/data/dataFriendsEmployee.json';
}
