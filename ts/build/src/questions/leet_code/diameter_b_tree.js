"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diameterOfBinaryTree = exports.TreeNode = void 0;
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
function diameterOfBinaryTree(root) {
    let diameter = 0;
    function traverse(node) {
        if (!node) {
            return 0;
        }
        const left = traverse(node.left);
        const right = traverse(node.right);
        diameter = Math.max(diameter, left + right);
        return Math.max(left + right) + 1;
    }
    traverse(root);
    return diameter;
}
exports.diameterOfBinaryTree = diameterOfBinaryTree;
//# sourceMappingURL=diameter_b_tree.js.map