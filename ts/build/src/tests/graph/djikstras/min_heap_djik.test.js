"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const min_heap_1 = require("../../../questions/graph/djikstras/min_heap");
test('min_heap_d', () => {
    const min_heap = new min_heap_1.DjikHeap();
    min_heap.add_node([10, 10]);
    min_heap.add_node([9, 9]);
    min_heap.add_node([8, 8]);
    min_heap.add_node([7, 7]);
    min_heap.add_node([6, 6]);
    min_heap.add_node([5, 5]);
    min_heap.add_node([4, 4]);
    min_heap.add_node([3, 3]);
    min_heap.add_node([2, 2]);
    min_heap.add_node([1, 1]);
    expect(min_heap.has_nodes()).toBe(true);
    const pop_check = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < pop_check.length; i++) {
        const val = min_heap.remove_node();
        expect(val).toBeTruthy();
        if (!val) {
            throw new Error('No value');
        }
        expect(val[1]).toBe(pop_check[i]);
    }
});
//# sourceMappingURL=min_heap_djik.test.js.map