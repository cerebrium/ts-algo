"use strict";
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
//
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined
// between two nodes p and q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).”
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowestCommonAncestor = exports.TreeNode = void 0;
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
exports.TreeNode = TreeNode;
function lowestCommonAncestor(root, p, q) {
    if (!root || p === root || q === root) {
        return root;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root;
    }
    return left ? left : right;
}
exports.lowestCommonAncestor = lowestCommonAncestor;
//# sourceMappingURL=lowest_common_ancestor_b_tree.js.map