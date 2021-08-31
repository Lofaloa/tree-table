import {Component, OnInit} from '@angular/core';
import * as data from "../models/schema.sample.2.json";
import {Table} from "../models/table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  table = <Table>JSON.parse(JSON.stringify(data));
  _content = JSON.stringify(this.table, null, 4);
}
