export function quicksort(
  data: Array<number>,
  start: number = 0,
  stop: number = data.length - 1
): void {
  if (start > stop) {
    return;
  }

  const pivot = q_helper(data, start, stop);
  quicksort(data, start, pivot - 1);
  quicksort(data, pivot + 1, stop);
}

function q_helper(
  data: Array<number>,
  start: number = 0,
  stop: number = data.length - 1
): number {
  let idx = start - 1;

  for (let i = start; i < stop; i++) {
    if (data[i] < data[stop]) {
      idx++;
      swap(i, idx, data);
    }
  }

  idx++;
  swap(idx, stop, data);

  return idx;
}

function swap(a: number, b: number, data: number[]): void {
  [data[a], data[b]] = [data[b], data[a]];
}
