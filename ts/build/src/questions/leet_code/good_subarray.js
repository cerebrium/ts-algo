"use strict";
// Given an integer array nums and an integer k,
// return true if nums has a good subarray or false otherwise.
//
// A good subarray is a subarray where:
//
// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:
//
// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
//
//
// Example 1:
//
// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
// Example 2:
//
// Input: nums = [23,2,6,4,7], k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
// Example 3:
//
// Input: nums = [23,2,6,4,7], k = 13
// Output: false
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSubarraySum = void 0;
function checkSubarraySum(nums, k) {
    const modMap = new Map();
    modMap.set(0, -1); // To handle the case where the subarray starts at index 0
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const mod = sum % k;
        if (!modMap.has(mod)) {
            modMap.set(mod, i);
        }
        const prevIdx = modMap.get(mod);
        // In the values before this idx
        if (prevIdx < i - 1) {
            return true;
        }
    }
    return false;
}
exports.checkSubarraySum = checkSubarraySum;
//# sourceMappingURL=good_subarray.js.map