export function quicksort(
  data: Array<number>,
  start: number = 0,
  stop: number = data.length - 1
): void {
  if (start > stop) {
    return;
  }

  let pivot = q_helper(data, start, stop);
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

function swap(data: Array<number>, start: number, stop: number): void {
  [data[start], data[stop]] = [data[stop], data[start]];
}
