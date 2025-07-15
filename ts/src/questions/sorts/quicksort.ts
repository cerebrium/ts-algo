export function quicksort(
  data: Array<number>,
  start: number = 0,
  stop: number = data.length - 1
): void {
  if (stop <= start) {
    return;
  }

  const pivot = partition(data, start, stop);
  quicksort(data, start, pivot - 1);
  quicksort(data, pivot + 1, stop);
}

function partition(data: number[], start: number, stop: number): number {
  let idx: number = start - 1;

  for (let i = start; i < stop; i++) {
    if (data[i] < data[stop]) {
      idx++;
      swap(data, idx, i);
    }
  }

  idx++;
  swap(data, idx, stop);

  return idx;
}

function swap(data: number[], start: number, end: number): void {
  [data[start], data[end]] = [data[end], data[start]];
}
