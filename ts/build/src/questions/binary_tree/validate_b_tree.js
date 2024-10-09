"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_b_tree = void 0;
function validate_b_tree(node, max = Number.MAX_VALUE, min = Number.MIN_VALUE) {
    // Base Case
    // if no node -> true
    if (!node) {
        return true;
    }
    // if node.val is higher than max, or less than min
    if (node.val > max || node.val < min) {
        console.log('returning false: ', node.val, '\nmax: ', max, '\n min:', min, '\n max fail: ', node.val > max, '\n min fail: ', node.val < min);
        return false;
    }
    // Recurse if any children false, we
    // need to return false.
    if (!validate_b_tree(node.left, node.val, min) ||
        !validate_b_tree(node.right, max, node.val)) {
        return false;
    }
    return true;
}
exports.validate_b_tree = validate_b_tree;
//# sourceMappingURL=validate_b_tree.js.map