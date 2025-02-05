"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_b_tree = void 0;
function validate_b_tree(node, max = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER) {
    if (!node) {
        return true;
    }
    if (node.val > max || node.val < min) {
        return false;
    }
    if (validate_b_tree(node.right, max, node.val) &&
        validate_b_tree(node.left, node.val, min)) {
        return true;
    }
    return false;
}
exports.validate_b_tree = validate_b_tree;
//# sourceMappingURL=validate_b_tree.js.map