"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_one_part_one = void 0;
function day_one_part_one(data) {
    let answer = 0;
    const first_row = new Array(data.length).fill(0);
    const second_row = new Array(data.length).fill(0);
    for (let i = 0; i < data.length; i++) {
        first_row[i] = data[i][0];
        second_row[i] = data[i][1];
    }
    first_row.sort((a, b) => a - b);
    second_row.sort((a, b) => a - b);
    for (let i = 0; i < data.length; i++) {
        answer += Math.abs(first_row[i] - second_row[i]);
    }
    return answer;
}
exports.day_one_part_one = day_one_part_one;
//# sourceMappingURL=code.js.map