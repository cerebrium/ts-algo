"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pairSums_1 = require("../../questions/leet_code/pairSums");
test('pair sums', () => {
    const n = 5;
    const k = 6;
    const arr = [1, 2, 3, 4, 3];
    const output = 2;
    const res = (0, pairSums_1.numberOfWays)(arr, k);
    expect(res).toEqual(output);
});
test('pair sums', () => {
    const n = 5;
    const k = 6;
    const arr = [1, 5, 3, 3, 3];
    const output = 4;
    const res = (0, pairSums_1.numberOfWays)(arr, k);
    expect(res).toEqual(output);
});
//# sourceMappingURL=pairSums.test.js.map