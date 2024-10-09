/**
 *
 * Implement quicksort:
 *
 *
 */

export function quicksort(
  data: Array<number>,
  start: number,
  stop: number
): void {
  // Base case -> start = stop
  if (start >= stop) {
    return;
  }

  // pre
  // recursre
  const pivot = q_sort_helper(data, start, stop);

  quicksort(data, start, pivot - 1);
  quicksort(data, pivot + 1, stop);
}

function q_sort_helper(
  data: Array<number>,
  start: number,
  stop: number
): number {
  const val = data[stop];
  let idx = start - 1;

  for (let i = start; i <= stop - 1; i++) {
    if (data[i] <= val) {
      ++idx;

      swap(data, i, idx);
    }
  }

  ++idx;
  swap(data, idx, stop);

  return idx;
}

function swap(data: Array<number>, x: number, y: number) {
  [data[x], data[y]] = [data[y], data[x]];
}
