export function find_cycles(graph: Map<string, string[]>): boolean {
  let are_cycles = false;

  graph.forEach((_, key) => {
    if (are_cycles) {
      return;
    }

    const visited: string[] = [];

    if (has_cycles(graph, key, visited)) {
      are_cycles = true;
      return;
    }
  });

  return are_cycles;
}

function has_cycles(
  graph: Map<string, string[]>,
  key: string,
  visited: string[]
): boolean {
  if (visited.includes(key)) {
    return true;
  }

  visited.push(key);

  const children = graph.get(key)!;

  for (const child of children) {
    if (has_cycles(graph, child, visited)) {
      return true;
    }
  }

  visited.pop();

  return false;
}
