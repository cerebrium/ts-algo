"use strict";
/**
 *
 * Implement quicksort:
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = void 0;
function quicksort(data, start, stop) {
    // Base case -> start = stop
    if (start >= stop) {
        return;
    }
    // pre
    // recursre
    const pivot = q_sort_helper(data, start, stop);
    quicksort(data, start, pivot - 1);
    quicksort(data, pivot + 1, stop);
}
exports.quicksort = quicksort;
function q_sort_helper(data, start, stop) {
    const val = data[stop];
    let idx = start - 1;
    for (let i = start; i <= stop - 1; i++) {
        if (data[i] <= val) {
            ++idx;
            swap(data, i, idx);
        }
    }
    ++idx;
    swap(data, idx, stop);
    return idx;
}
function swap(data, x, y) {
    [data[x], data[y]] = [data[y], data[x]];
}
//# sourceMappingURL=quicksort.js.map