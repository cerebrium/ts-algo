"use strict";
// Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).
//
// Each node will have a reference to its parent node. The definition for Node is below:
//
// class Node {
//     public int val;
//     public Node left;
//     public Node right;
//     public Node parent;
// }
// According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes
// p and q in a tree T is the lowest node that has both p and q as descendants
// (where we allow a node to be a descendant of itself)."
//
// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q exist in the tree.
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowestCommonAncestorThree = exports._Node = void 0;
class _Node {
    constructor(v) {
        this.val = v;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
exports._Node = _Node;
function lowestCommonAncestorThree(p, q) {
    if (!p) {
        return q;
    }
    if (!q) {
        return p;
    }
    const pSet = new Set();
    while (p) {
        pSet.add(p.val);
        if (p === q) {
            return p;
        }
        p = p.parent;
    }
    while (q) {
        if (pSet.has(q.val)) {
            return q;
        }
        q = q.parent;
    }
    return null;
}
exports.lowestCommonAncestorThree = lowestCommonAncestorThree;
//# sourceMappingURL=lowest_common_ancestor_3.js.map