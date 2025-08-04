"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = void 0;
function quicksort(data, start = 0, stop = data.length - 1) {
    if (start >= stop) {
        return;
    }
    const pivot = q_helper(data, start, stop);
    quicksort(data, start, pivot - 1);
    quicksort(data, pivot + 1, stop);
}
exports.quicksort = quicksort;
function q_helper(data, start, stop) {
    let compareVal = data[stop];
    let placeIdx = start - 1;
    for (let i = start; i < stop; i++) {
        if (data[i] < compareVal) {
            placeIdx++;
            swap(data, i, placeIdx);
        }
    }
    placeIdx++;
    swap(data, stop, placeIdx);
    return placeIdx;
}
function swap(data, start, stop) {
    [data[start], data[stop]] = [data[stop], data[start]];
}
//# sourceMappingURL=quicksort.js.map