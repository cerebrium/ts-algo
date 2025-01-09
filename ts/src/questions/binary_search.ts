/*
 *
 * Binary search uses O(logn) time, to find a target
 * in a sorted array.
 *
 * The following is the setup for implementing
 * binary search. It will be given a sorted array
 * in the test.
 *
 * The theory is as follows:
 * Find the mid point of the element array. Check
 * if the value at the midpoint is higher or
 * lower than the search target. If the found
 * value is lower than the search taget, then
 * take the value that represent the half of
 * data that is lower than the index where the
 * search target is found. If the found is
 * higher, than take the values that are
 * higher.
 *
 * This splits the searchable targets in two
 * each iteration. Therefore this allows for
 * any target to be found in log(2) of n elements.
 * or O(log n).
 *
 * This can be solved recursively or iteratively.
 * When possible, it is faster to reach for the
 * iterative solution, whilst being usually
 * easier to understand at the recursive level.
 *
 */

import {X509Certificate} from 'node:crypto';

export function binary_search(
  data: Array<number>,
  target: number
): number | null {
  return null;
}
