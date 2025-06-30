"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const peak_element_1 = require("../../questions/leet_code/peak_element");
// Explanation: 3 is a peak element and your function should return the index number 2.
test('peak_element', () => {
    const peak = (0, peak_element_1.findPeakElement)([1, 2, 3, 1]);
    expect(peak).toBe(2);
});
// Explanation: Your function can return either index number 1 where the peak element is 2,
// or index number 5 where the peak element is 6.
test('peak_element', () => {
    const peak = (0, peak_element_1.findPeakElement)([1, 2, 1, 3, 5, 6, 4]);
    const possibleAnswers = [5, 1];
    expect(possibleAnswers.includes(peak)).toBeTruthy();
});
test('peak_element', () => {
    const peak = (0, peak_element_1.findPeakElement)([1, 2]);
    expect(peak).toBe(1);
});
test('peak_element', () => {
    const peak = (0, peak_element_1.findPeakElement)([1, 2, 3]);
    expect(peak).toBe(2);
});
//# sourceMappingURL=peak_element.test.js.map