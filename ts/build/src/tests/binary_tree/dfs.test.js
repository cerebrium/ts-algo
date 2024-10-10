"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const dfs_1 = require("../../questions/binary_tree/dfs");
test('Depth first search', () => {
    const b_tree = (0, _1.make_b_tree)();
    expect((0, dfs_1.dfs)(b_tree, 7)).toBeTruthy();
    expect((0, dfs_1.dfs)(b_tree, 25)).toBeTruthy();
    expect((0, dfs_1.dfs)(b_tree, 26)).toBeFalsy();
});
//# sourceMappingURL=dfs.test.js.map