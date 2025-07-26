"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_b_tree = void 0;
function validate_b_tree(node, max = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER) {
    if (!node) {
        return true;
    }
    if (node.val < min || node.val > max) {
        return false;
    }
    return (validate_b_tree(node.left, node.val, min) &&
        validate_b_tree(node.right, max, node.val));
}
exports.validate_b_tree = validate_b_tree;
//# sourceMappingURL=validate_b_tree.js.map