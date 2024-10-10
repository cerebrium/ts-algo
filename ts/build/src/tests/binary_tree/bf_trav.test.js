"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const bf_trav_1 = require("../../questions/binary_tree/bf_trav");
test('Breadth First Traversal', () => {
    const b_tree = (0, _1.make_b_tree)();
    const bfs_vals = (0, bf_trav_1.bf_trav)(b_tree);
    const bf_answer = [10, 5, 20, 2, 7, 15, 25];
    expect(bfs_vals).toEqual(bf_answer);
});
//# sourceMappingURL=bf_trav.test.js.map