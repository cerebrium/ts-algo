"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bst_search = void 0;
function bst_search(node, target) {
    if (!node) {
        return null;
    }
    if (node.val === target) {
        return node;
    }
    if (target > node.val) {
        const val = bst_search(node.right, target);
        if (val) {
            return val;
        }
    }
    else {
        const val = bst_search(node.left, target);
        if (val) {
            return val;
        }
    }
    return null;
}
exports.bst_search = bst_search;
//# sourceMappingURL=bst_search.js.map