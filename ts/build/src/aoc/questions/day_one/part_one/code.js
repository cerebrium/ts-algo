"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = exports.day_one_part_one = void 0;
function day_one_part_one(data) {
    let answer = 0;
    const first_data_set = [];
    const second_data_set = [];
    for (const [a, b] of data) {
        first_data_set.push(a);
        second_data_set.push(b);
    }
    quicksort(first_data_set);
    quicksort(second_data_set);
    for (let i = 0; i < first_data_set.length; i++) {
        answer += Math.abs(first_data_set[i] - second_data_set[i]);
    }
    return answer;
}
exports.day_one_part_one = day_one_part_one;
/*
 *
 *
 *
 */
function quicksort(data, start = 0, end = data.length - 1) {
    if (start > end) {
        return;
    }
    const pivot = q_helper(start, end, data);
    quicksort(data, start, pivot - 1);
    quicksort(data, pivot + 1, end);
}
exports.quicksort = quicksort;
function q_helper(start, end, data) {
    let curr_idx = start - 1;
    for (let i = start; i < end; i++) {
        if (data[i] < data[end]) {
            curr_idx++;
            swap(i, curr_idx, data);
        }
    }
    curr_idx++;
    swap(end, curr_idx, data);
    return curr_idx;
}
function swap(start, end, data) {
    [data[start], data[end]] = [data[end], data[start]];
}
//# sourceMappingURL=code.js.map