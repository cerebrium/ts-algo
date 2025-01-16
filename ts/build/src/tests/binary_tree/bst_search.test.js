"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const bst_search_1 = require("../../questions/binary_tree/bst_search");
test('depth_first_search_b_tree', () => {
    const b_tree = (0, _1.make_b_tree)();
    const found_target = (0, bst_search_1.bst_search)(b_tree, 2);
    expect(found_target === null || found_target === void 0 ? void 0 : found_target.val).toBe(2);
    const not_found_target = (0, bst_search_1.bst_search)(b_tree, 9);
    expect(not_found_target).toBeFalsy();
});
//# sourceMappingURL=bst_search.test.js.map