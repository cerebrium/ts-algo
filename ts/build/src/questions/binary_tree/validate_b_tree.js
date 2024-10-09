"use strict";
/*
 *
 * Validate that a tree is a binary tree
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_b_tree = void 0;
function validate_b_tree(head) {
    const iterate = (node, max = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER) => {
        if (!node) {
            return true;
        }
        if (node.val < max &&
            node.val > min &&
            iterate(node.left, node.val, min) &&
            iterate(node.right, min, node.val)) {
            return true;
        }
        return false;
    };
    return iterate(head);
}
exports.validate_b_tree = validate_b_tree;
//# sourceMappingURL=validate_b_tree.js.map