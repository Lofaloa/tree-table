"use strict";
exports.__esModule = true;
exports.getTreeFirstNodes = exports.getTreeDepth = exports.countTreeLeafs = exports.isLeaf = void 0;
var sample_3_1 = require("./sample.3");
var isLeaf = function (node) {
    var _a;
    return node.children === null || node.children === undefined || ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) === 0;
};
exports.isLeaf = isLeaf;
var countTreeLeafs = function (node) {
    if (exports.isLeaf(node)) {
        return 1;
    }
    else {
        var count_1 = 0;
        if (node.children) {
            node.children.forEach(function (node) { return count_1 += exports.countTreeLeafs(node); });
        }
        return count_1;
    }
};
exports.countTreeLeafs = countTreeLeafs;
// We assume that the tree is balanced.
var getTreeDepth = function (node) {
    var depth = 0;
    while (!exports.isLeaf(node)) {
        console.log(node.value);
        if (node.children && node.children.length !== 0) {
            node = node.children[0];
            depth += 1;
        }
    }
    return depth;
};
exports.getTreeDepth = getTreeDepth;
var getTreeFirstNodes = function (node) {
    var nodes = [];
    while (!exports.isLeaf(node)) {
        if (!exports.isLeaf(node)) {
            node = node.children[0];
            nodes.push(node);
        }
    }
    return nodes;
};
exports.getTreeFirstNodes = getTreeFirstNodes;
console.log(exports.getTreeFirstNodes(sample_3_1.SAMPLE_TREE));
