export function day_one_part_one(data: Array<[number, number]>): number {
  let answer = 0;

  const first_data_set = [];
  const second_data_set = [];

  for (const [a, b] of data) {
    first_data_set.push(a);
    second_data_set.push(b);
  }

  quicksort(first_data_set);
  quicksort(second_data_set);

  for (let i = 0; i < first_data_set.length; i++) {
    answer += Math.abs(first_data_set[i] - second_data_set[i]);
  }

  return answer;
}

/*
 *
 *
 *
 */
export function quicksort(
  data: number[],
  start: number = 0,
  end: number = data.length - 1
) {
  if (start > end) {
    return;
  }

  const pivot = q_helper(start, end, data);
  quicksort(data, start, pivot - 1);
  quicksort(data, pivot + 1, end);
}

function q_helper(start: number, end: number, data: number[]): number {
  let curr_idx = start - 1;

  for (let i = start; i < end; i++) {
    if (data[i] < data[end]) {
      curr_idx++;
      swap(i, curr_idx, data);
    }
  }

  curr_idx++;
  swap(end, curr_idx, data);

  return curr_idx;
}

function swap(start: number, end: number, data: number[]): void {
  [data[start], data[end]] = [data[end], data[start]];
}
