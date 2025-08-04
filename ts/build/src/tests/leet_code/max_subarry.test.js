"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const max_subarray_1 = require("../../questions/leet_code/max_subarray");
test('max_subarray', () => {
    const test_data_one = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const ans_one = (0, max_subarray_1.max_subarray)(test_data_one);
    expect(ans_one).toBe(6);
});
// test('max_subarray', () => {
//   const test_data_two = [1];
//   const ans_two = max_subarray(test_data_two);
//   expect(ans_two).toBe(1);
// });
//
// test('max_subarray', () => {
//   const test_data_three = [5, 4, -1, 7, 8];
//   const ans_three = max_subarray(test_data_three);
//   expect(ans_three).toBe(23);
// });
//# sourceMappingURL=max_subarry.test.js.map