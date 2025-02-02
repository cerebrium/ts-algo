"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = void 0;
function quicksort(data, start = 0, stop = data.length - 1) {
    if (start > stop) {
        return;
    }
    const pivot = q_helper(data, start, stop);
    quicksort(data, start, pivot - 1);
    quicksort(data, pivot + 1, stop);
}
exports.quicksort = quicksort;
function q_helper(data, start = 0, stop = data.length - 1) {
    let idx = start - 1;
    for (let i = start; i < stop; i++) {
        if (data[i] < data[stop]) {
            idx++;
            swap(i, idx, data);
        }
    }
    idx++;
    swap(idx, stop, data);
    return idx;
}
function swap(a, b, data) {
    [data[a], data[b]] = [data[b], data[a]];
}
//# sourceMappingURL=quicksort.js.map