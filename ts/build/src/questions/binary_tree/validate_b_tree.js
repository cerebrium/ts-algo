"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_b_tree = void 0;
function validate_b_tree(node, max = Number.MAX_VALUE, min = Number.MIN_VALUE) {
    /*
     *
     * There are two ruls all nodes must follow:
     * the node must be less than a max and more that
     * a min. if the node is left then the max is its
     * parent, and the min is irrelevant, if the node
     * is right, than the min is its parent and the
     * max is irrelevant
     *
     */
    // Base cases
    if (!node) {
        return true;
    }
    if (node.val > max || node.val < min) {
        return false;
    }
    if (validate_b_tree(node.left, node.val, min) &&
        validate_b_tree(node.right, max, node.val)) {
        return true;
    }
    return false;
}
exports.validate_b_tree = validate_b_tree;
//# sourceMappingURL=validate_b_tree.js.map