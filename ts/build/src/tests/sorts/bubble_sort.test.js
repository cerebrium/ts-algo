"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bubble_sort_1 = require("../../questions/sorts/bubble_sort");
test('Bubble Sort', () => {
    const answer_data = [23, 34, 45, 56, 67, 78, 89, 90, 101, 104, 110, 140, 200];
    const test_data = [200, 89, 34, 101, 23, 56, 90, 45, 67, 78, 104, 110, 140];
    console.time('bubble_sort');
    const sorted_data = (0, bubble_sort_1.bubble_sort)(test_data);
    for (let i = 0; i < sorted_data.length; i++) {
        expect(answer_data[i]).toEqual(sorted_data[i]);
    }
    console.timeEnd('bubble_sort');
});
//# sourceMappingURL=bubble_sort.test.js.map