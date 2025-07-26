"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matchingPairs_1 = require("../../questions/leet_code/matchingPairs");
test('matching pairs', () => {
    const s = 'abcd';
    const t = 'adcb';
    const output = 4;
    const res = (0, matchingPairs_1.matchingPairs)(s, t);
    expect(res).toEqual(output);
});
test('matching pairs', () => {
    const s = 'mno';
    const t = 'mno';
    const output = 1;
    const res = (0, matchingPairs_1.matchingPairs)(s, t);
    expect(res).toEqual(output);
});
//# sourceMappingURL=matching_pairs.test.js.map