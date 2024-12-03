/**
 The do() instruction enables future mul instructions.
The don't() instruction disables future mul instructions.
Only the most recent do() or don't() instruction applies. At the beginning of the program, mul instructions are enabled.

 */
/* eslint-ignore */

export function day_three_part_two(input: string): number {
  const searcable_areas: Array<[number, number]> = [];
  let sum = 0;
  let current_idx = 0;
  let is_do = true;

  // Get the indices for the spans:
  while (true) {
    if (is_do) {
      const dont = input.indexOf("don't()", current_idx);
      if (dont === -1) {
        searcable_areas.push([current_idx, input.length]);
        break;
      }

      searcable_areas.push([current_idx, dont]);
      current_idx = dont;
      is_do = false;
      continue;
    }

    const do_s = input.indexOf('do()', current_idx);

    if (do_s === -1) {
      break;
    }

    current_idx = do_s;
    is_do = true;
  }

  const sub_arrays: Array<string> = searcable_areas.map(([start, end], i) => {
    return input.substring(start, end + 1);
  });

  for (let i = 0; i < sub_arrays.length; i++) {
    sum += day_three_part_one(sub_arrays[i]);
  }

  return sum;
}

function day_three_part_one(input: string): number {
  let sum = 0;

  const reg_input = input.matchAll(/mul\(\d+,\d+\)/g);

  for (const match of reg_input) {
    const [first, second] = match[0].split('mul(')[1].split(')')[0].split(',');

    sum += parseInt(first) * parseInt(second);
  }

  return sum;
}
