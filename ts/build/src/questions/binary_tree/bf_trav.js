"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bf_trav = void 0;
function bf_trav(node) {
    if (!node) {
        return [];
    }
    const values = [];
    let traversed = 0;
    const que = [node];
    while (traversed < que.length) {
        const current_node = que[traversed];
        ++traversed;
        values.push(current_node.val);
        if (current_node.left) {
            que.push(current_node.left);
        }
        if (current_node.right) {
            que.push(current_node.right);
        }
    }
    return values;
}
exports.bf_trav = bf_trav;
//# sourceMappingURL=bf_trav.js.map