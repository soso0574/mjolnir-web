import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the HEADER LANDING bar component.
 */
@Component({
  selector: 'app-sd-employee-header-profile',
  templateUrl: 'employee-header-profile.component.html',
  styleUrls: ['employee-header-profile.component.scss'],
})
export class EmployeeHeaderProfileComponent {
  @Input() className: string;
  @Input() imgUrl = '../assets/i/build-img.jpg';
}
