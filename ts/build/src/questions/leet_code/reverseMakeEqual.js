"use strict";
//Given two arrays A and B of length N, determine if there is a way to make A equal to B by reversing any subarrays from array B any number of times.
// Signature
// bool areTheyEqual(int[] arr_a, int[] arr_b)
// Input
// All integers in array are in the range [0, 1,000,000,000].
// Output
// Return true if B can be made equal to A, return false otherwise.
// Example
// A = [1, 2, 3, 4]
// B = [1, 4, 3, 2]
// output = true
// After reversing the subarray of B from indices 1 to 3, array B will equal array A.
Object.defineProperty(exports, "__esModule", { value: true });
exports.canBeEqual = void 0;
function canBeEqual(target, arr) {
    const numsA = new Map();
    for (let i = 0; i < target.length; i++) {
        const hasVal = numsA.get(target[i]);
        if (hasVal) {
            numsA.set(target[i], hasVal + 1);
            continue;
        }
        numsA.set(target[i], 1);
    }
    const numsB = new Map();
    for (let i = 0; i < arr.length; i++) {
        const hasVal = numsB.get(arr[i]);
        if (hasVal) {
            numsB.set(arr[i], hasVal + 1);
            continue;
        }
        numsB.set(arr[i], 1);
    }
    let areEqual = true;
    numsA.forEach((v, k) => {
        if (!areEqual) {
            return;
        }
        const bSet = numsB.get(k);
        if (bSet !== v) {
            areEqual = false;
            return false;
        }
        return;
    });
    return areEqual;
}
exports.canBeEqual = canBeEqual;
//# sourceMappingURL=reverseMakeEqual.js.map