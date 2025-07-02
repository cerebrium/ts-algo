"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verticalOrder = exports.TreeNode = void 0;
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
exports.TreeNode = TreeNode;
// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
// If two nodes are in the same row and column, the order should be from left to right.
function verticalOrder(root) {
    if (!root) {
        return [];
    }
    const traversedNodes = [];
    const nodeMap = new Map();
    const minMax = [0, 0];
    traverse(root, 0, 0, nodeMap, minMax);
    const [min, max] = minMax;
    for (let i = min; i <= max; i++) {
        const nodes = nodeMap.get(i);
        if (!nodes) {
            throw new Error('i is here but not in map: ' + i);
        }
        const finalNodes = nodes.sort((a, b) => a.row - b.row).map(x => x.val);
        traversedNodes.push(finalNodes);
    }
    return traversedNodes;
}
exports.verticalOrder = verticalOrder;
const traverse = (_node, column, row, nodeMap, minMax) => {
    const [min, max] = minMax;
    if (!_node) {
        return;
    }
    if (min > column) {
        minMax[0] = column;
    }
    if (max < column) {
        minMax[1] = column;
    }
    const hasColumn = nodeMap.get(column);
    if (hasColumn) {
        hasColumn.push({ row, val: _node.val });
        nodeMap.set(column, hasColumn);
    }
    else {
        nodeMap.set(column, [{ row, val: _node.val }]);
    }
    traverse(_node.left, column - 1, row + 1, nodeMap, minMax);
    traverse(_node.right, column + 1, row + 1, nodeMap, minMax);
};
//# sourceMappingURL=vertical_order_traversal_tree.js.map