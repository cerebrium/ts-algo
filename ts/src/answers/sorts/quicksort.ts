/**
 *
 * Implement quicksort:
 *
 * Takes args:
 * 1. data (Array<number>)
 * 2. target (number)
 *
 * finds the element in place
 *
 * returns index of element, or -1
 * if not in array.
 *
 */

export function quicksort(data: Array<number>, target: number): number {
  let bottom = 0;
  let top = data.length;

  while (bottom < top) {
    const mid = Math.floor((top - bottom) / 2 + bottom);
    const current_value = data[mid];

    if (current_value === target) {
      return mid;
    }

    // Higher than current location
    if (current_value < target) {
      bottom = mid + 1;
      continue;
    }

    top = mid;
  }

  return -1;
}
