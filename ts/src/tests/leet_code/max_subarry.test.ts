// Example 1:
//
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:
//
// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:
//
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

import {max_subarray} from '../../questions/leet_code/max_subarray';

test('max_subarray', () => {
  const test_data_one: number[] = [2, 3, 1, 2, 4, 3];
  const ans_one = max_subarray(7, test_data_one);
  expect(ans_one).toBe(2);

  const test_data_two = [1, 4, 4];
  const ans_two = max_subarray(4, test_data_two);
  expect(ans_two).toBe(1);

  const test_data_three = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const ans_three = max_subarray(11, test_data_three);
  expect(ans_three).toBe(0);
});
