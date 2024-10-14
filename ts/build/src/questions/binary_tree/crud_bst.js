"use strict";
/*
 *
 * Add node, Delete node, Update node
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_node = void 0;
/*
 *
 * Assuming that there is already a tree (single node exists)
 */
function add_node(node, val, prev_node) {
    // Base case
    // If node is null -> add the node
    if (!node) {
        if (prev_node.val > val) {
            prev_node.left = { val };
            return;
        }
        prev_node.right = { val };
        return;
    }
    if (node.val > val) {
        add_node(node.left, val, node);
    }
    else {
        add_node(node.right, val, node);
    }
}
exports.add_node = add_node;
//# sourceMappingURL=crud_bst.js.map