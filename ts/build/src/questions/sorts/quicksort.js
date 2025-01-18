"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = void 0;
function quicksort(data, start, stop) {
    /*
     *
     * This works by finding a pivot (the last element) then looking at
     * all other elements and comparing if the element is lower or higher.
     *
     * Then we repeat left and right
     *
     */
    // Base Cases
    if (start > stop) {
        return;
    }
    const pivot = q_helper(data, start, stop);
    quicksort(data, start, pivot - 1);
    quicksort(data, pivot + 1, stop);
}
exports.quicksort = quicksort;
function q_helper(data, start, stop) {
    let idx = start - 1;
    for (let i = start; i < stop; i++) {
        if (data[i] < data[stop]) {
            idx++;
            swap(data, i, idx);
        }
    }
    idx++;
    swap(data, idx, stop);
    return idx;
}
function swap(data, start, stop) {
    [data[start], data[stop]] = [data[stop], data[start]];
}
//# sourceMappingURL=quicksort.js.map