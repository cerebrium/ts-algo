"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dfs_rec = exports.BfsType = void 0;
var BfsType;
(function (BfsType) {
    BfsType["POST"] = "post";
    BfsType["PRE"] = "pre";
    BfsType["IN"] = "in";
})(BfsType || (exports.BfsType = BfsType = {}));
function bfs_rec(node, kind) {
    if (!node) {
        return [];
    }
    const values = [];
    traverse(node, kind, values);
    return values;
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
    switch (kind) {
        case BfsType.IN:
            traverse(node.left, kind, visited);
            visited.push(node.val);
            traverse(node.right, kind, visited);
            break;
        case BfsType.PRE:
            visited.push(node.val);
            traverse(node.left, kind, visited);
            traverse(node.right, kind, visited);
            break;
        default:
            traverse(node.left, kind, visited);
            traverse(node.right, kind, visited);
            visited.push(node.val);
    }
}
//# sourceMappingURL=df_trav.js.map