"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max_subarray = void 0;
/*
 *
 * We are looking for a max sub array that is greater than
 * the target input, when we find it we need to keep the
 * number, and the indices. Then we will take those and use
 * a heap the find the minimum amount of number in the min
 * sub array
 *
 * return that
 *
 */
function max_subarray(target, data) {
    let current_sum = 0;
    let min_subbary = data.length + 1;
    for (let start = 0, end = 0; start < data.length; start++) {
        current_sum += data[start];
        console.log('what is the end: ', end);
        while (current_sum >= target) {
            // Replace the min sub array
            min_subbary = Math.min(min_subbary, start - end + 1);
            current_sum -= data[end];
            end++;
        }
    }
    return min_subbary === data.length + 1 ? 0 : min_subbary;
}
exports.max_subarray = max_subarray;
// export function max_subarray(target: number, nums: number[]): number {
//   let currentSum = 0;
//   let minLength = nums.length + 1;
//
//   // Set the starting points for the sliding window
//   for (let start = 0, end = 0; start < nums.length; ++start) {
//     // Add the current number to the current sum
//     currentSum += nums[start];
//
//     // Check all subarrays
//     while (currentSum >= target) {
//       minLength = Math.min(minLength, start - end + 1);
//
//       currentSum -= nums[end];
//
//       ++end;
//     }
//   }
//
//   // If minLength was not updated, it means no valid subarray was found, so return 0
//   // Otherwise, return the minLength found
//   return minLength === nums.length + 1 ? 0 : minLength;
// }
/*
 * This is kadanes
 export function max_subarray(target: number, data: number[]): number {
  let idx = 0;
  let local_max = data[0];
  let global_max = data[0];

  for (let i = 1; i < data.length; i++) {
    local_max = Math.max(data[i], local_max + data[i]);
    if (local_max > global_max) {
      global_max = local_max;
    }
  }

  return 0;
}
*/
//# sourceMappingURL=max_subarray.js.map