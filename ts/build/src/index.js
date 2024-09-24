"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dfs_1 = require("./questions/graph/adjacency_list/dfs");
const adjacency_list_1 = require("./tests/graph/adjacency_list");
const graph_traversal = new dfs_1.dfs({ list: adjacency_list_1.adj_list_circle_demo });
console.time('graph');
const path = graph_traversal.find_node({ start: 0, target: 5 });
console.log('path: ', path);
console.timeEnd('graph');
//# sourceMappingURL=index.js.map