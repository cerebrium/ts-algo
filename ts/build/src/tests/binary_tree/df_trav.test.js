"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const df_trav_1 = require("../../questions/binary_tree/df_trav");
test('depth_first_traversal', () => {
    const b_tree = (0, _1.make_b_tree)();
    const pre = (0, df_trav_1.dfs_rec)(b_tree, df_trav_1.BfsType.PRE);
    expect(pre).toEqual([10, 5, 2, 7, 20, 15, 25]);
    const in_order = (0, df_trav_1.dfs_rec)(b_tree, df_trav_1.BfsType.IN);
    expect(in_order).toEqual([2, 5, 7, 10, 15, 20, 25]);
    const post = (0, df_trav_1.dfs_rec)(b_tree, df_trav_1.BfsType.POST);
    expect(post).toEqual([25, 15, 20, 7, 2, 5, 10]);
});
//# sourceMappingURL=df_trav.test.js.map