"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b_tree_compare = void 0;
function b_tree_compare(node_one, node_two) {
    // Base cases:
    // if node 1 and not node 2 -> false
    // if not node 1 and node 2 -> false
    // if nodes but vals not same -> false
    if (!node_one || !node_two) {
        return true;
    }
    if ((node_one && !node_two) || (node_two && !node_one)) {
        return false;
    }
    if (node_one.val !== node_two.val) {
        return false;
    }
    if (!b_tree_compare(node_one.left, node_two.left) ||
        !b_tree_compare(node_one.right, node_two.right)) {
        return false;
    }
    return true;
}
exports.b_tree_compare = b_tree_compare;
//# sourceMappingURL=compare_b_tree.js.map