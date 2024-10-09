"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const dfs_1 = require("../../questions/binary_tree/dfs");
test('Depth first search', () => {
    const b_tree = (0, _1.make_b_tree)();
    console.time('b');
    expect((0, dfs_1.dfs)(b_tree, 7)).toBe(true);
    console.timeEnd('b');
    console.time('b');
    expect((0, dfs_1.dfs)(b_tree, 25)).toBe(true);
    console.timeEnd('b');
    console.time('b');
    expect((0, dfs_1.dfs)(b_tree, 26)).toBe(false);
    console.timeEnd('b');
});
//# sourceMappingURL=dfs.test.js.map