/**
  The actual word search will be full of letters instead. For example:

MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
In this word search, XMAS occurs a total of 18 times; here's the same word search again, but where letters not involved in any XMAS have been replaced with .:

....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX
Take a look at the little Elf's word search. How many times does XMAS appear?

 */

const possible_directions = [
  [-1, 0], // horizontals
  [+1, 0],
  [0, -1], // verticals
  [0, +1],
  [+1, +1], // diagonals
  [+1, -1],
  [-1, +1],
  [-1, -1],
];

const next_values = ['M', 'A', 'S'];

export function day_four_part_one(input: Array<string>): number {
  let found_xmas = 0;

  /*
   *
   * This is basically the maze solver. Except that we need to find all
   * from each starting point. We will loop through every node, and call
   * the depth first traversal on each node, if the node value is 'X'.
   *
   *
   *
   */

  for (let i = 0; i < input.length; i++) {
    for (let x = 0; x < input[i].length; x++) {
      if (input[i][x] === 'X') {
        const count = _depth_first_xmas(
          [i, x],
          input,
          0,
          input[i].length,
          input.length,
          'M',
          -1
        );

        if (count) {
          found_xmas += count;
        }
      }
    }
  }

  return found_xmas;
}

/**
 *
 * We will recieve the coordinates of the first value. From that
 * point we check all directions possible (left, right, diagonal)
 * for the next expected letter. Once we start a direction we should
 * continue that direction.
 *
 * We will have an input that is the current direction if started,
 * and we will continue that direction. If not, we will check all.
 *
 *
 */
function _depth_first_xmas(
  node: [number, number],
  graph: Array<string>,
  node_count: number,
  width: number,
  height: number,
  next_value: string,
  dir_idx: number
) {
  // If Direction then continue down that path (recurse)
  if (dir_idx >= 0) {
    const [x, y] = [
      node[0] + possible_directions[dir_idx][0],
      node[1] + possible_directions[dir_idx][1],
    ];

    if (x < 0 || x > width - 1) {
      return node_count;
    }

    if (y < 0 || y > height - 1) {
      return node_count;
    }

    if (graph[x][y] === next_value) {
      if (graph[x][y] === 'S') {
        return node_count + 1;
      }

      return _depth_first_xmas(
        [x, y],
        graph,
        node_count,
        width,
        height,
        next_values[next_values.indexOf(graph[x][y]) + 1],
        dir_idx
      );
    }
    return;
  }

  let local_count = node_count;

  // Start
  for (let i = 0; i < possible_directions.length; i++) {
    const found_node = _depth_first_xmas(
      node,
      graph,
      node_count,
      width,
      height,
      'M',
      i
    );

    if (found_node) {
      local_count += found_node;
    }
  }

  return local_count;
}
