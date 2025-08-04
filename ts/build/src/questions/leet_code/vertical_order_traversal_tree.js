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
// Given the root of a binary tree, calculate the vertical order traversal of the binary tree.
//
// For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1)
// and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).
//
// The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index
// starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the
// same row and same column. In such a case, sort these nodes by their values.
//
// Return the vertical order traversal of the binary tree.
// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
// If two nodes are in the same row and column, the order should be from left to right.
//Input: root = [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Explanation:
// Column -1: Only node 9 is in this column.
// Column 0: Nodes 3 and 15 are in this column in that order from top to bottom.
// Column 1: Only node 20 is in this column.
// Column 2: Only node 7 is in this column.
function verticalOrder(root) {
    const buckets = new Map();
    const minMax = [0, 0];
    const answer = [];
    walk(root, buckets, minMax, 0, 0);
    for (let i = minMax[0]; i <= minMax[1]; i++) {
        const hasColumn = buckets.get(i);
        if (!hasColumn) {
            continue;
        }
        hasColumn.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        });
        answer.push(hasColumn.map(a => a[1]));
    }
    return answer;
}
exports.verticalOrder = verticalOrder;
function walk(node, buckets, minMax, horizontalHierarchy, verticalOrder) {
    if (!node) {
        return;
    }
    const bucket = buckets.get(horizontalHierarchy);
    if (!bucket) {
        buckets.set(horizontalHierarchy, [[verticalOrder, node.val]]);
    }
    else {
        buckets.set(horizontalHierarchy, [...bucket, [verticalOrder, node.val]]);
    }
    minMax[0] = Math.min(minMax[0], horizontalHierarchy);
    minMax[1] = Math.max(minMax[1], horizontalHierarchy);
    walk(node.left, buckets, minMax, horizontalHierarchy - 1, verticalOrder + 1);
    walk(node.right, buckets, minMax, horizontalHierarchy + 1, verticalOrder + 1);
}
//# sourceMappingURL=vertical_order_traversal_tree.js.map