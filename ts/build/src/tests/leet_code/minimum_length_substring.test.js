"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimumLengthSubstring_1 = require("../../questions/leet_code/minimumLengthSubstring");
test('minimum length substring', () => {
    const s = 'dcbefebce';
    const t = 'fd';
    const output = 5;
    const res = (0, minimumLengthSubstring_1.minLengthSubstring)(s, t);
    expect(res).toEqual(output);
});
test('minimum length substring', () => {
    const s = 'bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf';
    const t = 'cbccfafebccdccebdd';
    const output = -1;
    const res = (0, minimumLengthSubstring_1.minLengthSubstring)(s, t);
    expect(res).toEqual(output);
});
//# sourceMappingURL=minimum_length_substring.test.js.map