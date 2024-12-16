export function day_nine_part_one(input: number[]) {
  let disc_space = 0;

  let current_idx = 0;
  for (let i = 0; i < input.length; i += 2) {
    // Last element
    disc_space += input[i];
  }

  const final_list = new Array(disc_space).fill(0);

  let start_pointer = 0;
  let end_pointer = input.length;

  let start_idx = 0;
  let end_idx = Math.floor(end_pointer / 2);

  let current_end_fill = input[end_pointer];

  let idx = 0;
  console.log('end idx: ', end_idx);
  while (start_pointer <= end_pointer) {
    console.log('incremental arr: ', final_list);
    /*
     * For lenth of start pointer value, write
     * start index.
     *
     * for length of start pointer + 1 value,
     * write end index while less greater than
     * end pointer value, if start pointer + 1
     * is greater than end pointer value, decrement
     * end pointer, and continue writing
     *
     *
     *
     * [1, 2, 3, 4, 5];
     */

    for (let i = 0; i < input[start_pointer]; ++i) {
      final_list[idx] = start_idx;
      ++idx;
    }

    let empty_space = input[start_pointer + 1];

    if (!empty_space) {
      break;
    }

    console.log('empty_space: ', empty_space);

    for (let i = 0; i < empty_space; ++i) {
      if ((current_end_fill = 0)) {
        end_pointer -= 2;
        end_idx -= 1;
        current_end_fill = input[end_pointer];
      }

      final_list[idx] = end_idx;
      ++idx;
    }

    start_pointer += 2;
    ++start_idx;
  }

  console.log('the final array: ', final_list);

  let final_sum = 0;
  for (let i = 1; i < final_list.length; i++) {
    final_sum += final_list[i] * i;
  }

  return final_sum;
}
