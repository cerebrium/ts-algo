"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = void 0;
function quicksort(data, start, stop) {
    if (start >= stop) {
        return;
    }
    const pivot = q_helper(data, start, stop);
    quicksort(data, start, pivot - 1);
    quicksort(data, pivot + 1, stop);
}
exports.quicksort = quicksort;
function q_helper(data, start, stop) {
    const pivot = data[stop];
    let idx = start - 1;
    for (let i = start; i < stop; i++) {
        if (data[i] < pivot) {
            ++idx;
            swap(data, i, idx);
        }
    }
    // Get to either 0, or to self, or number higher
    idx++;
    swap(data, idx, stop);
    return idx;
}
function swap(data, start, stop) {
    [data[start], data[stop]] = [data[stop], data[start]];
}
//# sourceMappingURL=quicksort.js.map