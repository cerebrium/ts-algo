/*
 *
 * Given an unordered array, sort it using
 * bubble sort.
 *
 *
 */

export function bubble_sort(nums: Array<number>): Array<number> {
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
