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
const fast_djikstras_1 = require("../../../questions/graph/djikstras/fast_djikstras");
test('djikstras_fast', () => {
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
    console.log('fast_djikstras');
    console.time('fast_djikstras');
    const shortest_path = (0, fast_djikstras_1.djikstras_fast)(test_graph, 9);
    console.timeEnd('fast_djikstras');
    expect(shortest_path).toEqual([0, 1, 2, 3, 5, 9]);
});
//# sourceMappingURL=fast_djikstras.test.js.map