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

export function max_subarray(nums: number[]): number {
  let localMax: number = 0;
  let globalMax: number = 0;

  for (let i = 0; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    globalMax = Math.max(localMax, globalMax);
  }

  return globalMax;
}
