export function quicksort(
  data: Array<number>,
  start: number = 0,
  stop: number = data.length - 1
): void {
  if (start >= stop) {
    return;
  }

  const pivot = q_helper(data, start, stop);
  quicksort(data, start, pivot - 1);
  quicksort(data, pivot + 1, stop);
}

function q_helper(data: number[], start: number, stop: number) {
  let compareVal = data[stop];
  let placeIdx: number = start - 1;

  for (let i = start; i < stop; i++) {
    if (data[i] < compareVal) {
      placeIdx++;
      swap(data, i, placeIdx);
    }
  }
  placeIdx++;

  swap(data, stop, placeIdx);

  return placeIdx;
}

function swap(data: number[], start: number, stop: number): void {
  [data[start], data[stop]] = [data[stop], data[start]];
}
