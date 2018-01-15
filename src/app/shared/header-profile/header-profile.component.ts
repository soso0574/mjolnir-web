import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the HEADER LANDING bar component.
 */
@Component({
  selector: 'app-sd-header-profile',
  templateUrl: 'header-profile.component.html',
  styleUrls: ['header-profile.component.scss'],
})
export class HeaderProfileComponent {
  @Input() activeMenu: string;
  @Input() imgUrl = '../assets/i/build-img.jpg';
}
