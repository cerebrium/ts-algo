"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maximum_swap_1 = require("../../questions/leet_code/maximum_swap");
// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.
test('max_swap', () => {
    const res = (0, maximum_swap_1.maximumSwap)(2736);
    expect(res).toEqual(7236);
});
// Input: num = 9973
// Output: 9973
// Explanation: No swap.
test('max_swap', () => {
    const res = (0, maximum_swap_1.maximumSwap)(9973);
    expect(res).toEqual(9973);
});
//# sourceMappingURL=maximum_swap.test.js.map