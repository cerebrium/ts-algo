"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const min_heap_1 = require("../../questions/heap/min_heap");
test('min_heap', () => {
    const min_heap = new min_heap_1.MinHeap();
    min_heap.add(10);
    min_heap.add(9);
    min_heap.add(8);
    min_heap.add(7);
    min_heap.add(6);
    min_heap.add(5);
    min_heap.add(4);
    min_heap.add(3);
    min_heap.add(2);
    min_heap.add(1);
    expect(min_heap.data.length).toBe(10);
    const pop_check = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < pop_check.length; i++) {
        const val = min_heap.pop();
        expect(val).toBe(pop_check[i]);
    }
});
//# sourceMappingURL=min_heap.test.js.map