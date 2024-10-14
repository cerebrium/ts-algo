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
    // If this fails, it's the dfs above that is broken
    expect(test_pre_dfs).toEqual([2, 5, 7, 10, 15, 20, 25]);
    // To test this we will do a pre-order depth first search
    // We should find all numbers above within the returned array,
    // and they should be sorted smallest -> greatest.
    const added_nodes_arr = in_dfs(b_tree);
    const expected_ints = [3, 30, 9, 17, 12, 23];
    // All added ints should be present
    for (let i = 0; i < expected_ints.length; i++) {
        expect(added_nodes_arr.includes(expected_ints[i])).toBeTruthy();
    }
    // Check that it is sorted ascending
    let prev_ref = -1;
    for (let i = 0; i < added_nodes_arr.length; i++) {
        expect(added_nodes_arr[i] > prev_ref).toBeTruthy();
        prev_ref = added_nodes_arr[i];
    }
});
test('Delete Node', () => {
    let b_tree = (0, _1.make_b_tree)();
    const test_pre_dfs = in_dfs((0, _1.make_b_tree)());
    // If this fails, it's the dfs above that is broken
    expect(test_pre_dfs).toEqual([2, 5, 7, 10, 15, 20, 25]);
    // Delete 2
    (0, crud_bst_1.delete_node)(b_tree, 2, b_tree);
    let nodes_post_deletion = in_dfs(b_tree);
    expect(nodes_post_deletion).toEqual([5, 7, 10, 15, 20, 25]);
    // Check that it is sorted ascending
    let prev_ref = -1;
    for (let i = 0; i < nodes_post_deletion.length; i++) {
        expect(nodes_post_deletion[i] > prev_ref).toBeTruthy();
        prev_ref = nodes_post_deletion[i];
    }
    // check replace operation
    b_tree = (0, _1.make_b_tree)();
    (0, crud_bst_1.delete_node)(b_tree, 15, b_tree);
    nodes_post_deletion = in_dfs(b_tree);
    expect(nodes_post_deletion).toEqual([2, 5, 7, 10, 20, 25]);
    // Check that it is sorted ascending
    prev_ref = -1;
    for (let i = 0; i < nodes_post_deletion.length; i++) {
        expect(nodes_post_deletion[i] > prev_ref).toBeTruthy();
        prev_ref = nodes_post_deletion[i];
    }
});
//# sourceMappingURL=crud_bst.test.js.map