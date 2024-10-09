"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const bfs_1 = require("../../questions/binary_tree/bfs");
test('Breadth first search', () => {
    const b_tree = (0, _1.make_b_tree)();
    const pre = (0, bfs_1.bfs_rec)(b_tree, bfs_1.BfsType.PRE);
    expect(pre).toEqual([10, 5, 2, 7, 20, 15, 25]);
    const in_order = (0, bfs_1.bfs_rec)(b_tree, bfs_1.BfsType.IN);
    expect(in_order).toEqual([2, 5, 7, 10, 15, 20, 25]);
    const post = (0, bfs_1.bfs_rec)(b_tree, bfs_1.BfsType.POST);
    expect(post).toEqual([25, 15, 20, 7, 2, 5, 10]);
});
//# sourceMappingURL=bfs.test.js.map