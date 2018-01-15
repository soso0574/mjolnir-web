import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the lazy loaded OrganizationTreeComponent.
 */
@Component({
  selector: 'app-sd-organization-tree',
  templateUrl: 'organization-tree.component.html',
  styleUrls: ['organization-tree.component.scss']
})
export class OrganizationTreeComponent implements OnInit {
  @Input() treeData: any[];

  /**
   * Creates an instance of the NotificationOnlineComponent
   *
   */
  constructor() {}

  /**
   * Get the dataList OnInit
   */
  ngOnInit() {
  }

  // click + icon
  addNode(addedSubList) {
      const new_node = {
                'title': 'parent',
                'isEdit': false,
                'subList': [

                ]
              };
      addedSubList.push(new_node);
  }
}
