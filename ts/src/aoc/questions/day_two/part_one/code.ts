/*

Rules:
1. The levels are either all increasing or all decreasing.
2. Any two adjacent levels differ by at least one and at most three.

EX:
7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.

So, in this example, 2 reports are safe.

*/

/**
 *
 * day_two_part_one takes one arg
 *
 */
export function day_two_part_one(data: Array<number[]>): number {
  let answer = 0;

  for (const row of data) {
    if (is_increasing(row[0], row[1]) && increasing_is_safe(row)) {
      answer++;
      continue;
    }

    if (decreasing_is_safe(row)) {
      answer++;
    }
  }

  return answer;
}

function is_increasing(a: number, b: number) {
  return b > a;
}

function increasing_is_safe(data: number[]): boolean {
  for (let i = 1; i < data.length; i++) {
    const [curr, next] = [data[i - 1], data[i]];

    if (curr >= next) {
      return false;
    }

    if (next - curr > 3) {
      return false;
    }
  }
  return true;
}

function decreasing_is_safe(data: number[]): boolean {
  for (let i = 1; i < data.length; i++) {
    const [curr, next] = [data[i - 1], data[i]];

    if (next >= curr) {
      return false;
    }

    if (curr - next > 3) {
      return false;
    }
  }

  return true;
}
