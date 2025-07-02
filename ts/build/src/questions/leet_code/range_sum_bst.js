"use strict";
// Given the root node of a binary search tree and two integers low and high,
// return the sum of values of all nodes with a value in the inclusive range [low, high].
//
//
//
// Example 1:
//
//
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
// Example 2:
//
//
// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.rangeSumBST = exports.TreeNode = void 0;
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
exports.TreeNode = TreeNode;
function rangeSumBST(root, low, high) {
    if (!root) {
        return 0;
    }
    if (root.val > high) {
        return rangeSumBST(root.left, low, high);
    }
    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    }
    // Post
    if (root.val <= high && root.val >= low) {
        return (root.val +
            rangeSumBST(root.left, low, high) +
            rangeSumBST(root.right, low, high));
    }
    return 0;
}
exports.rangeSumBST = rangeSumBST;
//# sourceMappingURL=range_sum_bst.js.map