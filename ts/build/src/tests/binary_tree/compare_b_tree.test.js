"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const compare_b_tree_1 = require("../../questions/binary_tree/compare_b_tree");
test('compare two b trees', () => {
    const b_one = (0, _1.make_b_tree)();
    const b_two = (0, _1.make_b_tree)();
    let is_equal = (0, compare_b_tree_1.b_tree_compare)(b_one, b_two);
    expect(is_equal).toBeTruthy();
    const b_three = (0, _1.make_broken_b_tree)();
    is_equal = (0, compare_b_tree_1.b_tree_compare)(b_one, b_three);
    expect(is_equal).toBeFalsy();
});
//# sourceMappingURL=compare_b_tree.test.js.map