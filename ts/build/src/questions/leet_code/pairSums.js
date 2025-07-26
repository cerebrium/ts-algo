"use strict";
// Given a list of n integers arr[0..(n-1)], determine the number of different pairs of elements within it which sum to k.
// If an integer appears in the list multiple times, each copy is considered to be different; that is,
// two pairs are considered different if one pair includes at least one array index which the other doesn't, even if they include the same values.
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberOfWays = void 0;
function numberOfWays(arr, k) {
    let count = 0;
    const freq = new Map();
    for (let i = 0; i < arr.length; i++) {
        const hasComplement = freq.get(k - arr[i]);
        if (!hasComplement) {
            freq.set(arr[i], 1);
            continue;
        }
        count += hasComplement;
        freq.set(arr[i], hasComplement + 1);
    }
    return count;
}
exports.numberOfWays = numberOfWays;
//# sourceMappingURL=pairSums.js.map