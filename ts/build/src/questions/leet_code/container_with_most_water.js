"use strict";
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/
// export function maxArea(height: number[]): number {
//   let max_height: number = 0;
//   if (height.length < 2) {
//     return 0;
//   }
//
//   for (let i = 0; i < height.length; i++) {
//     for (let x = 1; x < height.length; x++) {
//       const width = x - i;
//       const local_height = Math.min(height[i], height[x]);
//
//       max_height = Math.max(width * local_height, max_height);
//     }
//   }
//   return max_height;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxArea = void 0;
function maxArea(heights) {
    let max_height = 0;
    if (heights.length < 2) {
        return 0;
    }
    let min_pointer = 0;
    let max_pointer = heights.length - 1;
    while (min_pointer < max_pointer) {
        max_height = Math.max(max_height, (max_pointer - min_pointer) *
            Math.min(heights[min_pointer], heights[max_pointer]));
        if (heights[min_pointer] > heights[max_pointer]) {
            max_pointer--;
            continue;
        }
        min_pointer++;
    }
    return max_height;
}
exports.maxArea = maxArea;
//# sourceMappingURL=container_with_most_water.js.map