"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const validate_b_tree_1 = require("../../questions/binary_tree/validate_b_tree");
test('validate_b_tree', () => {
    const bTree = (0, _1.make_b_tree)();
    const isValid = (0, validate_b_tree_1.validate_b_tree)(bTree);
    expect(isValid).toBeTruthy();
    const brokenBTree = (0, _1.make_broken_b_tree)();
    const isNotValid = (0, validate_b_tree_1.validate_b_tree)(brokenBTree);
    expect(isNotValid).toBeFalsy();
});
//# sourceMappingURL=validate_b_tree.test.js.map