export function day_three_part_one(input: string): number {
  let sum = 0;

  const reg_input = input.matchAll(/mul\(\d+,\d+\)/g);

  for (const match of reg_input) {
    const [first, second] = match[0].split('mul(')[1].split(')')[0].split(',');

    sum += parseInt(first) * parseInt(second);
  }

  return sum;
}
