"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quicksort_1 = require("../../questions/sorts/quicksort");
test('quicksort', () => {
    const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const idx = (0, quicksort_1.quicksort)(data, 8);
    expect(idx).toBe(8);
});
//# sourceMappingURL=quicksort.js.map