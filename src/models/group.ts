import {Data} from "./data";

export interface Group {
  label: string;
  data: Data[] | Group[]; // if type is Data[] then we have a leaf
}
