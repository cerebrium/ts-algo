export function day_five_non_graph_part_one(
  orderings: Array<[number, number]>,
  data: Array<number[]>
): number {
  let answer = 0;
  const order_map: Map<number, number[]> = new Map();
  const valid_list: boolean[] = new Array(data.length).fill(false);

  for (let i = 0; i < orderings.length; i++) {
    if (order_map.has(orderings[i][0])) {
      order_map.set(orderings[i][0], [
        ...order_map.get(orderings[i][0])!,
        orderings[i][1],
      ]);
      continue;
    }

    order_map.set(orderings[i][0], [orderings[i][1]]);
  }

  for (let i = 0; i < data.length; i++) {
    const update = data[i];

    let is_valid = true;
    for (let x = update.length - 1; x > 0; x--) {
      // no rules, no problems
      if (!order_map.has(update[x])) {
        continue;
      }

      const rules = order_map.get(update[x])!;
      // Walk backward through the array, check
      // that all elements before the current node
      // aren't breaking the current nodes rules.
      for (let y = 0; y < x; y++) {
        if (rules.includes(update[y])) {
          is_valid = false;
          break;
        }
      }

      if (!is_valid) {
        break;
      }
    }

    if (is_valid) {
      valid_list[i] = true;
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (valid_list[i]) {
      answer += data[i][Math.floor(data[i].length / 2)];
    }
  }

  return answer;
}
