export function day_seven_part_one(input: string[]) {
  const formatted_data: Map<number, number[]> = format_data(input);
}

function format_data(input: string[]): Map<number, number[]> {
  const formatted_map: Map<number, number[]> = new Map();

  for (let i = 0; i < input.length; i++) {
    const [sum, options] = input[i].split(':');

    formatted_map.set(
      parseInt(sum),
      options.split(' ').map(x => parseInt(x))
    );
  }

  return formatted_map;
}
