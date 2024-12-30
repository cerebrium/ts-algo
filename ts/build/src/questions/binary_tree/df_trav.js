"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dfs_rec = exports.BfsType = void 0;
var BfsType;
(function (BfsType) {
    BfsType["POST"] = "post";
    BfsType["PRE"] = "pre";
    BfsType["IN"] = "in";
})(BfsType || (exports.BfsType = BfsType = {}));
function dfs_rec(node, kind) {
    const nodes = [];
    traverse(node, kind, nodes);
    return nodes;
}
exports.dfs_rec = dfs_rec;
function traverse(node, kind, visited) {
    /*
     *
     * We will go through the trees and add the nodes
     * in the order that we reach them
     *
     */
    if (!node) {
        return;
    }
    // pre
    if (kind === BfsType.PRE) {
        visited.push(node.val);
        traverse(node.left, kind, visited);
        traverse(node.right, kind, visited);
    }
    // in
    if (kind === BfsType.IN) {
        traverse(node.left, kind, visited);
        visited.push(node.val);
        traverse(node.right, kind, visited);
    }
    // post
    if (kind === BfsType.POST) {
        traverse(node.left, kind, visited);
        traverse(node.right, kind, visited);
        visited.push(node.val);
    }
}
//# sourceMappingURL=df_trav.js.map