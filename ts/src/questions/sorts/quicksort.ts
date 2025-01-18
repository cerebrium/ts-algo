export function quicksort(
  data: Array<number>,
  start: number,
  stop: number
): void {
  /*
   *
   * This works by finding a pivot (the last element) then looking at
   * all other elements and comparing if the element is lower or higher.
   *
   * Then we repeat left and right
   *
   */

  // Base Cases
  if (start > stop) {
    return;
  }

  const pivot = q_helper(data, start, stop);
  quicksort(data, start, pivot - 1);
  quicksort(data, pivot + 1, stop);
}

function q_helper(data: Array<number>, start: number, stop: number): number {
  let idx = start - 1;

  for (let i = start; i < stop; i++) {
    if (data[i] < data[stop]) {
      idx++;
      swap(data, i, idx);
    }
  }

  idx++;
  swap(data, idx, stop);

  return idx;
}

function swap(data: number[], start: number, stop: number) {
  [data[start], data[stop]] = [data[stop], data[start]];
}
