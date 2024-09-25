"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_b_tree = void 0;
function make_b_tree() {
    const head = { val: 10 };
    head.left = { val: 5 };
    head.left.left = { val: 2 };
    head.left.right = { val: 7 };
    head.right = { val: 20 };
    head.right.right = { val: 25 };
    head.right.left = { val: 15 };
    return head;
}
exports.make_b_tree = make_b_tree;
//# sourceMappingURL=index.js.map