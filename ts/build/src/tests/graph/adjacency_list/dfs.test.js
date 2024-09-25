"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dfs_1 = require("../../../questions/graph/adjacency_list/dfs");
const index_1 = require("./index");
test('Depth first search with an adjacency list', () => {
    const graph_traversal = new dfs_1.dfs({ list: index_1.adj_list_circle_demo });
    console.time('graph');
    const path = graph_traversal.find_node({ start: 0, target: 5 });
    expect(path).toEqual([0, 1, 2, 3, 4]);
    console.timeEnd('graph');
    const graph_traversal_2 = new dfs_1.dfs({ list: index_1.adj_list_random });
    console.time('graph');
    const path_2 = graph_traversal_2.find_node({ start: 0, target: 2 });
    expect(path_2).toEqual([0, 5, 3, 1]);
    console.timeEnd('graph');
});
//# sourceMappingURL=dfs.test.js.map