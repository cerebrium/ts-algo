"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBillionUsersDay_1 = require("../../questions/leet_code/getBillionUsersDay");
test('get billion users day', () => {
    const growthRates = [1.5];
    const output = 52;
    const res = (0, getBillionUsersDay_1.getBillionUsersDay)(growthRates);
    expect(output).toEqual(res);
});
test('get billion users day', () => {
    const growthRates = [1.1, 1.2, 1.3];
    const output = 79;
    const res = (0, getBillionUsersDay_1.getBillionUsersDay)(growthRates);
    expect(output).toEqual(res);
});
test('get billion users day', () => {
    const growthRates = [1.01, 1.02];
    const output = 1047;
    const res = (0, getBillionUsersDay_1.getBillionUsersDay)(growthRates);
    expect(output).toEqual(res);
});
//# sourceMappingURL=get_billion_users_day.test.js.map