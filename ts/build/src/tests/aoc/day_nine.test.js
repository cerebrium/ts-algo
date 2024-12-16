"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../aoc/questions/day_nine/data");
const code_1 = require("../../aoc/questions/day_nine/part_one/code");
test('day_nine', () => {
    const answer = (0, code_1.day_nine_part_one)(data_1.day_nine_smaller_test_data);
    console.log('answer');
    expect(answer).toBe(60);
});
//# sourceMappingURL=day_nine.test.js.map