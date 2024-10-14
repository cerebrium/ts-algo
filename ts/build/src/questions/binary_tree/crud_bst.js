"use strict";
/*
 *
 * Add node, Delete node, Update node
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_node = exports.add_node = void 0;
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
function delete_node(node, val, prev_node) {
    // Base case
    // if val === node.val -> delete node
    // if node === null -> not found -> return null
    if (!node) {
        return;
    }
    // Delete case
    if (node.val === val) {
        return _handel_delete_node(node, val, prev_node);
    }
    // Find case
    if (node.val > val) {
        return delete_node(node.left, val, node);
    }
    else {
        return delete_node(node.right, val, node);
    }
}
exports.delete_node = delete_node;
function _handel_delete_node(node, val, prev_node) {
    // Delete
    // cases 1: 0 children -> remove ref to it
    if (!node.left && !node.right) {
        if (prev_node.val > val) {
            prev_node.left = undefined;
            return;
        }
        else {
            prev_node.right = undefined;
            return;
        }
    }
    // Case 2: 1 child -> point prev to child
    if (!node.left && node.right) {
        if (prev_node.val > val) {
            prev_node.left = node.right;
            return;
        }
        else {
            prev_node.right = node.right;
            return;
        }
    }
    if (node.left && !node.right) {
        if (prev_node.val > val) {
            prev_node.left = node.left;
            return;
        }
        else {
            prev_node.right = node.left;
            return;
        }
    }
    // Case 3: 2 children -> find smallest node in decendent larger tree
    // We need to:
    // find the smallest child on the right side
    let parent = node;
    let right_most_node = node.right;
    while (right_most_node === null || right_most_node === void 0 ? void 0 : right_most_node.left) {
        parent = right_most_node;
        right_most_node = right_most_node.left;
    }
    // Handle the found replacments parent
    // 1 child:
    // point parent to child
    if (right_most_node.right) {
        parent.left = right_most_node.right;
    }
    // 0 children
    // remove pointer from parent
    parent.left = undefined;
    // Give the smallest large node the found
    // nodes children
    right_most_node.left = node.left;
    right_most_node.right = node.right;
    // Replace found node with detached smallest
    // larget node
    if (prev_node.val > val) {
        prev_node.left = right_most_node;
        return;
    }
    else {
        prev_node.right = right_most_node;
        return;
    }
}
//# sourceMappingURL=crud_bst.js.map