// Given an integer array nums and an integer k, return the kth largest element in the array.
//
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
// Can you solve it without sorting?

import {k_largest_element} from '../../questions/leet_code/k_largest_element';

test('k_largest_number', () => {
  const num = k_largest_element([3, 2, 1, 5, 6, 4], 2);
  expect(num).toBe(5);
});

test('k_largest_number', () => {
  const num = k_largest_element([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
  expect(num).toBe(4);
});

test('k_largest_number', () => {
  const num = k_largest_element([2, 1], 2);
  expect(num).toBe(1);
});

test('k_largest_number', () => {
  const num = k_largest_element([-1, 2, 0], 1);
  expect(num).toBe(2);
});

test('k_largest_number', () => {
  const num = k_largest_element([-1, 2, 0], 2);
  expect(num).toBe(0);
});

test('k_largest_number', () => {
  const num = k_largest_element([5, 2, 4, 1, 3, 6, 0], 2);
  expect(num).toBe(5);
});
