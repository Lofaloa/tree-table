import { Component } from '@angular/core';
import {Table} from "../../../models/table";
import * as data from "../../../models/schema.sample.2.json";
import {countDataRows} from "../../../models/util";
import {Group} from "../../../models/group";
import {Data} from "../../../models/data";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  table = <Table>JSON.parse(JSON.stringify(data));

  get headers(): string[] {
    return ["Column A", "Column B", "Lost Jobs", "Companies"];
  }

  get firstParentCategorySize(): number {
    return countDataRows(this.firstParentCategory);
  }

  get firstParentCategory(): Group {
    return this.table.data[0];
  }

  get firstSubCategorySize(): number {
    return countDataRows(this.firstSubCategory);
  }

  subCategorySize(group: Group): number {
    return countDataRows(group);
  }

  get firstSubCategory(): Group {
    return this.firstParentCategory.data[0] as Group;
  }

  get remainingSubCategories(): Group[] {
    let arr = [...this.firstParentCategory.data];
    arr.shift();
    return arr as Group[];
  }

  get remainingChildren(): Data[] {
    let arr = [...this.firstSubCategory.data];
    arr.shift();
    return arr as Data[];
  }

  firstSubCategoryChild(group: Group): Data {
    return group.data[0] as Data;
  }

  remainingSubCategoryChildren(group: Group): Data[] {
    let arr = [...group.data];
    arr.shift();
    return arr as Data[];
  }
}
