export function find_cycles(graph: Map<string, string[]>): boolean {
  let are_cycles = false;

  const visited: string[] = [];
  graph.forEach((_, key) => {
    if (are_cycles) {
      return;
    }

    if (walk(graph, key, visited)) {
      are_cycles = true;
    }
  });

  return are_cycles;
}

function walk(
  graph: Map<string, string[]>,
  curr_node: string,
  visited: string[]
): boolean {
  // pre
  if (visited.includes(curr_node)) {
    return true;
  }

  visited.push(curr_node);

  // recurse
  const children = graph.get(curr_node)!;
  for (const child of children) {
    if (walk(graph, child, visited)) {
      return true;
    }
  }

  // post
  visited.pop();

  return false;
}
