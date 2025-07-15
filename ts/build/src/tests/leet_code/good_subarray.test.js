"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const good_subarray_1 = require("../../questions/leet_code/good_subarray");
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
test('good_subarray', () => {
    const input = [23, 2, 4, 6, 7];
    const k = 6;
    expect((0, good_subarray_1.checkSubarraySum)(input, k)).toBeTruthy();
});
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
test('good_subarray', () => {
    const input = [23, 2, 6, 4, 7];
    const k = 6;
    expect((0, good_subarray_1.checkSubarraySum)(input, k)).toBeTruthy();
});
test('good_subarray', () => {
    const input = [23, 2, 6, 4, 7];
    const k = 13;
    expect((0, good_subarray_1.checkSubarraySum)(input, k)).toBeFalsy();
});
test('good_subarray', () => {
    const input = [2, 4, 3];
    const k = 6;
    expect((0, good_subarray_1.checkSubarraySum)(input, k)).toBeTruthy();
});
test('good_subarray', () => {
    const input = [5, 0, 0, 0];
    const k = 3;
    expect((0, good_subarray_1.checkSubarraySum)(input, k)).toBeTruthy();
});
test('good_subarray', () => {
    const input = [1, 0, 1, 0, 1];
    const k = 4;
    expect((0, good_subarray_1.checkSubarraySum)(input, k)).toBeFalsy();
});
test('good_subarray', () => {
    const input = [23, 2, 6, 2, 5];
    const k = 6;
    expect((0, good_subarray_1.checkSubarraySum)(input, k)).toBeFalsy();
});
//# sourceMappingURL=good_subarray.test.js.map