export function day_one_part_two(data: Array<[number, number]>): number {
  let sum = 0;
  const second: Map<number, number> = new Map();

  for (let i = 0; i < data.length; i++) {
    const [_, second_value] = data[i];

    if (second.has(second_value)) {
      second.set(second_value, second.get(second_value)! + 1);
      continue;
    }

    second.set(second_value, 1);
  }

  for (let i = 0; i < data.length; i++) {
    const [first_value, _] = data[i];

    if (second.has(first_value)) {
      sum += second.get(first_value)! * first_value;
    }
  }

  return sum;
}
