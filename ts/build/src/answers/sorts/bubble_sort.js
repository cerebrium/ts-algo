"use strict";
/*
 *
 * Given an unordered array, sort it using
 * bubble sort.
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubble_sort = void 0;
function bubble_sort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                // Swap
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums;
}
exports.bubble_sort = bubble_sort;
//# sourceMappingURL=bubble_sort.js.map