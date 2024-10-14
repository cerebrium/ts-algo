"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const crud_bst_1 = require("../../questions/binary_tree/crud_bst");
function in_dfs(node) {
    // Base node is null
    // return
    const path = [];
    iterate(node, path);
    return path;
}
function iterate(node, path) {
    if (!node) {
        return;
    }
    iterate(node.left, path);
    path.push(node.val);
    iterate(node.right, path);
}
test('Add Node', () => {
    const b_tree = (0, _1.make_b_tree)();
    (0, crud_bst_1.add_node)(b_tree, 3, b_tree);
    (0, crud_bst_1.add_node)(b_tree, 30, b_tree);
    (0, crud_bst_1.add_node)(b_tree, 9, b_tree);
    (0, crud_bst_1.add_node)(b_tree, 17, b_tree);
    (0, crud_bst_1.add_node)(b_tree, 12, b_tree);
    (0, crud_bst_1.add_node)(b_tree, 23, b_tree);
    const test_pre_dfs = in_dfs((0, _1.make_b_tree)());
    expect(test_pre_dfs).toEqual([2, 5, 7, 10, 15, 20, 25]);
    // To test this we will do a pre-order depth first search
    // We should find all numbers above within the returned array,
    // and they should be chronological.
});
//# sourceMappingURL=crud_bst.js.map