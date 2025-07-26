"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseMakeEqual_1 = require("../../questions/leet_code/reverseMakeEqual");
test('reversMakeEqual', () => {
    const A = [1, 2, 3, 4];
    const B = [1, 4, 3, 2];
    const res = (0, reverseMakeEqual_1.canBeEqual)(A, B);
    expect(res).toBeTruthy();
});
test('reversMakeEqual', () => {
    const A = [7];
    const B = [7];
    const res = (0, reverseMakeEqual_1.canBeEqual)(A, B);
    expect(res).toBeTruthy();
});
test('reversMakeEqual', () => {
    const A = [3, 7, 9];
    const B = [3, 7, 11];
    const res = (0, reverseMakeEqual_1.canBeEqual)(A, B);
    expect(res).toBeFalsy();
});
test('reversMakeEqual', () => {
    const A = [1, 2, 2, 3];
    const B = [1, 1, 2, 3];
    const res = (0, reverseMakeEqual_1.canBeEqual)(A, B);
    expect(res).toBeFalsy();
});
//# sourceMappingURL=reverse_make_equal.test.js.map