import {Group} from "./group";
import {Data} from "./data";
import * as table from "./schema.sample.3.json";

type Node = any;

export const isGroup = (node: Node): boolean => {
  return "label" in node;
}

export const isData = (node: Node): boolean => {
  return !isGroup(node);
}

export const countDataRows = (node: Node): number => {
  if (isData(node)) {
    return 1;
  } else {
    let count = 0;
    (node as Group).data.forEach(node => count += countDataRows(node));
    return count;
  }
};
