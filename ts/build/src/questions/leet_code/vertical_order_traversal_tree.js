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
    const answer = [];
    const verticalMap = new Map();
    let min = 0;
    let max = 0;
    const que = [[0, root]];
    let currIdx = 0;
    while (currIdx < que.length) {
        const [verIdx, _node] = que[currIdx];
        const hasSubArray = verticalMap.get(verIdx);
        if (!hasSubArray) {
            verticalMap.set(verIdx, [_node.val]);
        }
        else {
            hasSubArray.push(_node.val);
            verticalMap.set(verIdx, hasSubArray);
        }
        if (_node.left) {
            que.push([verIdx - 1, _node.left]);
            min = Math.min(verIdx - 1, min);
        }
        if (_node.right) {
            que.push([verIdx + 1, _node.right]);
            max = Math.max(verIdx + 1, max);
        }
        currIdx++;
    }
    for (let i = min; i <= max; i++) {
        const subArray = verticalMap.get(i);
        if (subArray && subArray.length) {
            answer.push(subArray);
        }
    }
    return answer;
}
exports.verticalOrder = verticalOrder;
//# sourceMappingURL=vertical_order_traversal_tree.js.map