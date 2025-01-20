export function day_one_part_two(data: Array<[number, number]>): number {
  let answer = 0;

  const second_list_map: Map<number, number> = new Map();

  for (let i = 0; i < data.length; i++) {
    const current_val = second_list_map.get(data[i][1]);

    if (!current_val) {
      second_list_map.set(data[i][1], 1);
      continue;
    }

    second_list_map.set(data[i][1], current_val + 1);
  }

  for (let i = 0; i < data.length; i++) {
    const second_list_occurences = second_list_map.get(data[i][0]);

    if (!second_list_occurences) {
      continue;
    }

    answer += second_list_occurences * data[i][0];
  }

  return answer;
}
