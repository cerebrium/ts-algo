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
    // if node is null, then we can append if conditions met
    // if we see a value that matches our current value, skip it
    if (!node) {
        //  If prev_val larger: left = new node
        //  If prev_val smaller: right = new node
        if (prev_node.val > val) {
            prev_node.left = { val };
            return;
        }
        prev_node.right = { val };
        return;
    }
    if (node.val === val) {
        return;
    }
    if (node.val > val) {
        return add_node(node.left, val, node);
    }
    return add_node(node.right, val, node);
}
exports.add_node = add_node;
//# sourceMappingURL=crud_bst.js.map