export function find_cycles(graph: Map<string, string[]>): boolean {
  let hasCycles = false;

  graph.forEach((_, k) => {
    if (hasCycles) {
      return;
    }

    const visited: string[] = [];
    const visitedSet: Set<string> = new Set();

    if (findCycle(graph, visited, k, visitedSet)) {
      hasCycles = true;
      return;
    }
  });
  return hasCycles;
}

function findCycle(
  graph: Map<string, string[]>,
  visited: string[],
  node: string,
  visitedSet: Set<string>
): boolean {
  if (visited.includes(node)) {
    return true;
  }

  if (visitedSet.has(node)) {
    return false;
  }

  visited.push(node);
  visitedSet.add(node);

  // Recurse
  const children = graph.get(node);
  if (!children || !children.length) {
    return false;
  }

  for (const child of children) {
    if (findCycle(graph, visited, child, visitedSet)) {
      return true;
    }
  }

  visited.pop();
  return false;
}
