import {maxArea} from '../../questions/leet_code/container_with_most_water';

test('container_most_water', () => {
  let answer = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  expect(answer).toBe(49);

  answer = maxArea([1, 1]);
  expect(answer).toBe(1);
});
