"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bf_trav = void 0;
function bf_trav(node) {
    if (!node) {
        return [];
    }
    const ret_vals = [];
    const que = [node];
    let idx = 0;
    while (idx < que.length) {
        const currentNode = que[idx];
        if (currentNode.left) {
            que.push(currentNode.left);
        }
        if (currentNode.right) {
            que.push(currentNode.right);
        }
        ret_vals.push(currentNode.val);
        idx++;
    }
    return ret_vals;
}
exports.bf_trav = bf_trav;
//# sourceMappingURL=bf_trav.js.map