import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-org-structure',
  templateUrl: './org-structure.component.html',
  styleUrls: ['./org-structure.component.scss']
})
export class OrgStructureComponent implements OnInit {
  @Input() treeData: any[];

  constructor() { }

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
