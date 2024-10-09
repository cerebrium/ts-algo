"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quicksort_1 = require("../../questions/sorts/quicksort");
test('quicksort', () => {
    const data = [1, 3, 7, 0, 2, 4, 5, 6, 10, 8, 9];
    (0, quicksort_1.quicksort)(data, 0, data.length - 1);
    console.log('data: ', data);
    expect(data).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
//# sourceMappingURL=quicksort.test.js.map