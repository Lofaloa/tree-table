import { SAMPLE_TREE } from "./sample.3";
import * as table from "./schema.sample.3.node.json";

export interface TreeLeafData {
    jobs: number;
    companies: number;
}

export interface TreeNode {
    value: TreeLeafData | string;
    children: TreeNode[] | null | undefined;
}

export const isLeaf = (node: TreeNode): boolean => {
    return node.children === null || node.children === undefined || node.children?.length === 0;
};
  
export const countTreeLeafs = (node: TreeNode): number => {
    if (isLeaf(node)) {
        return 1;
    } else {
        let count = 0;
        if (node.children) {
            node.children.forEach(node => count += countTreeLeafs(node));
        }
        return count;
    }
};

// We assume that the tree is balanced.
export const getTreeDepth = (node: TreeNode): number => {
    let depth = 0;
    while (!isLeaf(node)) {
        console.log(node.value);
        if (node.children && node.children.length !== 0) {
            node = node.children[0];
            depth += 1;
        }
    }
    return depth;
};

export const getTreeFirstNodes = (node: TreeNode): TreeNode[] => {
    const nodes = [];
    while (!isLeaf(node)) {
        if (!isLeaf(node)) {
            nodes.push(node);
        }
        node = node.children![0];
    }
    return nodes;
};

console.log(getTreeFirstNodes(SAMPLE_TREE));