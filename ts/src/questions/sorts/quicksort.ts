export function quicksort(
  data: Array<number>,
  start: number,
  stop: number
): void {
  if (start >= stop) {
    return;
  }

  const pivot = q_helper(data, start, stop);
  quicksort(data, start, pivot - 1);
  quicksort(data, pivot + 1, stop);
}

function q_helper(data: Array<number>, start: number, stop: number): number {
  const pivot = data[stop];
  let idx = start - 1;

  for (let i = start; i < stop; i++) {
    if (data[i] < pivot) {
      ++idx;
      swap(data, i, idx);
    }
  }

  // Get to either 0, or to self, or number higher
  idx++;
  swap(data, idx, stop);

  return idx;
}

function swap(data: Array<number>, start: number, stop: number): void {
  [data[start], data[stop]] = [data[stop], data[start]];
}
