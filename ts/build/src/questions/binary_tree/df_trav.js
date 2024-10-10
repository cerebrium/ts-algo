"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bfs_rec = exports.BfsType = void 0;
var BfsType;
(function (BfsType) {
    BfsType["POST"] = "post";
    BfsType["PRE"] = "pre";
    BfsType["IN"] = "in";
})(BfsType || (exports.BfsType = BfsType = {}));
function bfs_rec(node, kind) {
    const nodes = [];
    traverse(node, kind, nodes);
    return nodes;
}
exports.bfs_rec = bfs_rec;
function traverse(node, kind, visited) {
    // Base Case
    if (!node) {
        return;
    }
    // Pre
    if (kind === BfsType.PRE) {
        visited.push(node.val);
        traverse(node.left, kind, visited);
        traverse(node.right, kind, visited);
    }
    // Recurse
    if (kind === BfsType.IN) {
        traverse(node.left, kind, visited);
        visited.push(node.val);
        traverse(node.right, kind, visited);
    }
    // Post
    if (kind === BfsType.POST) {
        traverse(node.right, kind, visited);
        traverse(node.left, kind, visited);
        visited.push(node.val);
    }
}
//# sourceMappingURL=df_trav.js.map