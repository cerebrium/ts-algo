"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_one_part_two = void 0;
function day_one_part_two(data) {
    let sum = 0;
    const second = new Map();
    for (let i = 0; i < data.length; i++) {
        const [_, second_value] = data[i];
        if (second.has(second_value)) {
            second.set(second_value, second.get(second_value) + 1);
            continue;
        }
        second.set(second_value, 1);
    }
    for (let i = 0; i < data.length; i++) {
        const [first_value, _] = data[i];
        if (second.has(first_value)) {
            sum += second.get(first_value) * first_value;
        }
    }
    return sum;
}
exports.day_one_part_two = day_one_part_two;
//# sourceMappingURL=code.js.map