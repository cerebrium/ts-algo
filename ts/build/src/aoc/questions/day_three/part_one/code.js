"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_three_part_one = void 0;
function day_three_part_one(input) {
    let sum = 0;
    const reg_input = input.matchAll(/mul\(\d+,\d+\)/g);
    for (const match of reg_input) {
        const [first, second] = match[0].split('mul(')[1].split(')')[0].split(',');
        sum += parseInt(first) * parseInt(second);
    }
    return sum;
}
exports.day_three_part_one = day_three_part_one;
//# sourceMappingURL=code.js.map