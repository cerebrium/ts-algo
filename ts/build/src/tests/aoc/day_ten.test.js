"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../aoc/questions/day_ten/data");
const code_1 = require("../../aoc/questions/day_ten/part_one/code");
const code_2 = require("../../aoc/questions/day_ten/part_two/code");
test('day_ten', () => {
    const day_ten = new code_1.DayTen();
    day_ten.init(data_1.day_ten_data);
    const answer = day_ten.find_trailheads();
    expect(answer).toBe(698);
});
test('day_ten_part_two', () => {
    const day_ten = new code_2.DayTenTwo();
    day_ten.init(data_1.day_ten_data);
    const answer = day_ten.find_trailheads();
    console.log('answer: ', answer);
    expect(answer).toBe(81);
});
//# sourceMappingURL=day_ten.test.js.map