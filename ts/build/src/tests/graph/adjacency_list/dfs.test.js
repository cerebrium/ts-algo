"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dfs_1 = require("../../../questions/graph/adjacency_list/dfs");
test('adj_list_dfs', () => {
    const test_data = [
        [[1, 6]],
        [[2, 3]],
        [[3, 2]],
        [
            [4, 12],
            [5, 7],
        ],
        [
            [1, 9],
            [5, 5],
            [8, 13],
        ],
        [[6, 21]],
        [[7, 6]],
        [[0, 2]],
        [[]],
    ];
    let path = (0, dfs_1.adj_list_dfs)(test_data, 4);
    expect(path).toStrictEqual([0, 1, 2, 3, 4]);
    path = (0, dfs_1.adj_list_dfs)(test_data, 7);
    expect(path).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7]);
});
//# sourceMappingURL=dfs.test.js.map