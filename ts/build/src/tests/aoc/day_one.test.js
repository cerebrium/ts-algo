"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = require("../../aoc/questions/day_one/part_one/code");
const data_1 = require("../../aoc/questions/day_one/part_one/data");
const code_2 = require("../../aoc/questions/day_one/part_two/code");
test('aoc_day_one_part_one', () => {
    const answer = (0, code_1.day_one_part_one)(data_1.day_one_part_one_data);
    expect(answer).toBe(1646452);
});
test('aoc_day_one_part_two', () => {
    const answer = (0, code_2.day_one_part_two)(data_1.day_one_part_one_data);
    expect(answer).toBe(3);
});
//# sourceMappingURL=day_one.test.js.map