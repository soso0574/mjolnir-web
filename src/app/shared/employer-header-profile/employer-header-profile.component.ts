import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the HEADER LANDING bar component.
 */
@Component({
  selector: 'app-sd-employer-header-profile',
  templateUrl: 'employer-header-profile.component.html',
  styleUrls: ['employer-header-profile.component.scss'],
})
export class EmployerHeaderProfileComponent {
  @Input() className: string;
  @Input() imgUrl = '../assets/i/build-img.jpg';
}
