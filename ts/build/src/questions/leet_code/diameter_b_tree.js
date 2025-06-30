"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diameterOfBinaryTree = exports.TreeNode = void 0;
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
exports.TreeNode = TreeNode;
function diameterOfBinaryTree(root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return 0;
    }
    let diameter = 0;
    const traverse = (node) => {
        if (!node) {
            return 0;
        }
        const left = traverse(node.left);
        const right = traverse(node.right);
        return Math.max(left, right) + 1;
    };
    return diameter;
}
exports.diameterOfBinaryTree = diameterOfBinaryTree;
//# sourceMappingURL=diameter_b_tree.js.map