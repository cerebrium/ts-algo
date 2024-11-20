"use strict";
/**
 *
 * Test Data:
 * [
 * [[1, 6]],
 * [[2, 3]],
 * [[3, 2]],
 * [[4, 12], [5, 7]],
 * [[1,9], [5,5], [8, 13]],
 * [[6, 21], [9, 13]],
 * [[7, 6], [9, 6]],
 * [[0, 2]],
 * [[6, 1]],
 * [[]],
 * ]
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const djikstras_1 = require("../../../questions/graph/adjacency_list/djikstras");
test('djikstras', () => {
    const test_graph = [
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
        [
            [6, 21],
            [9, 13],
        ],
        [
            [7, 6],
            [9, 6],
        ],
        [[0, 2]],
        [[6, 1]],
        [[]],
    ];
    const shortest_path = (0, djikstras_1.djikstras)(test_graph, 9);
    console.log('shortest path: ', shortest_path);
    expect(shortest_path).toEqual([0, 1, 2, 3, 5, 9]);
});
//# sourceMappingURL=djikstras.test.js.map