import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the HEADER LANDING bar component.
 */
@Component({
  selector: 'app-sd-header-landing',
  templateUrl: 'header-landing.component.html',
  styleUrls: ['header-landing.component.scss'],
})
export class HeaderLandingComponent {
  @Input() scrolled: boolean;
}
