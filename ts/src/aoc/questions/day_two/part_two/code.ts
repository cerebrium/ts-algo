/**
 *
 * This day was bugged out -> might be correct, might not
 *
 */

export function day_two_part_two(data: Array<number[]>): number {
  let answer = 0;

  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].length; x++) {
      const sub_arr = [...data[i]];
      sub_arr.splice(x, 1);

      const is_increase = is_increasing(sub_arr[0], sub_arr[1]);

      if (is_increase) {
        if (increasing_is_safe(sub_arr)) {
          answer++;
          break;
        }

        continue;
      }

      if (decreasing_is_safe(sub_arr)) {
        answer++;
        break;
      }
    }
  }

  return answer;
}
function is_increasing(a: number, b: number): boolean {
  if (a > b) {
    return false;
  }

  return true;
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
