"use strict";
///
// Input: s =
// Output: ""
Object.defineProperty(exports, "__esModule", { value: true });
const min_removal_make_valid_1 = require("../../questions/leet_code/min_removal_make_valid");
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
test('min_removal_make_valid', () => {
    const input = 'lee(t(c)o)de)';
    const output = 'lee(t(c)o)de';
    const res = (0, min_removal_make_valid_1.minRemoveMakeValid)(input);
    expect(res.length).toBe(output.length);
    if (res.length !== output.length) {
        return;
    }
    for (let i = 0; i < output.length; i++) {
        expect(output[i]).toEqual(res[i]);
    }
});
test('min_removal_make_valid', () => {
    const input = 'a)b(c)d';
    const output = 'ab(c)d';
    const res = (0, min_removal_make_valid_1.minRemoveMakeValid)(input);
    expect(res.length).toBe(output.length);
    if (res.length !== output.length) {
        return;
    }
    for (let i = 0; i < output.length; i++) {
        expect(output[i]).toEqual(res[i]);
    }
});
// Explanation: An empty string is also valid.
test('min_removal_make_valid', () => {
    const input = '))((';
    const output = '';
    const res = (0, min_removal_make_valid_1.minRemoveMakeValid)(input);
    expect(res.length).toBe(output.length);
});
//# sourceMappingURL=min_removal_make_valid.test.js.map