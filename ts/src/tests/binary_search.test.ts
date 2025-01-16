import {binary_search} from '../questions/binary_search';

test('binary_search', () => {
  const test_data = [23, 34, 45, 56, 67, 78, 89, 90, 101, 104, 110, 140, 200];

  console.time('binary_search');
  expect(binary_search(test_data, 104)).toBe(9);
  console.timeEnd('binary_search');

  console.time('binary_search');
  expect(binary_search(test_data, 200)).toBe(test_data.length - 1);
  console.timeEnd('binary_search');

  console.time('binary_search');
  expect(binary_search(test_data, 23)).toBe(0);
  console.timeEnd('binary_search');
});
