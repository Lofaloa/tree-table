import {Component, Input, OnInit} from '@angular/core';
import {Data} from "../../../models/data";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input()
  label: string = "Data"

  @Input()
  data: Data = {
    employees: 0,
    companies: 0
  };

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.data));
  }

}
