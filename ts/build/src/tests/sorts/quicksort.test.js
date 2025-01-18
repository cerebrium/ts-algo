"use strict";
// import {quicksort} from '../../questions/sorts/quicksort';
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = require("../../aoc/questions/day_one/part_one/code");
test('quicksort', () => {
    const data = [1, 3, 7, 0, 2, 4, 5, 6, 10, 8, 9, 33, 22, 12, 0, 74];
    console.log('the test is running');
    (0, code_1.quicksort)(data);
    expect(data).toEqual([0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 22, 33, 74]);
});
//# sourceMappingURL=quicksort.test.js.map