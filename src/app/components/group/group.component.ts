import {Component, Input, OnInit} from '@angular/core';
import {Group} from "../../../models/group";
import {Data} from "../../../models/data";
import {countDataRows} from "../../../models/util";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {

  @Input()
  root: boolean = false;

  @Input()
  group: Group = {
    label: "Default",
    data: []
  };

  get containsGroup(): boolean {
    return this.group.data.length > 0 && "label" in this.group.data[0];
  }

  get groups(): Group[] {
    return this.group.data as Group[];
  }

  get rowspan(): number {
    return this.group.data.length;
  }

  get containsData(): boolean {
    return !this.containsGroup;
  }

  get dataGroup(): Data[] {
    return this.group.data as Data[];
  }

  getChild(index: number): Group {
    return this.group.data[index] as Group;
  }

  getChildDataRows(node: any) {
    return countDataRows(node);
  }

  get rows(): number {
    return countDataRows(this.group);
  }

  private hasSubgroups(group: Group) {
    return group.data.length > 0 && "label" in group.data[0];
  }

}
