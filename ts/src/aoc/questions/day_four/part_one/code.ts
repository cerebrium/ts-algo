/**
 *
 
"Looks like the Chief's not here. Next!" One of The Historians pulls out a device and pushes the only button on it. After a brief flash, you recognize the interior of the Ceres monitoring station!

As the search for the Chief continues, a small Elf who lives on the station tugs on your shirt; she'd like to know if you could help her with her word search (your puzzle input). She only has to find one word: XMAS.

This word search allows words to be horizontal, vertical, diagonal, written backwards, or even overlapping other words. It's a little unusual, 
though, as you don't merely need to find one instance of XMAS - you need to find all of them. Here are a few ways XMAS might appear, where irrelevant characters have been replaced with .:


..X...
.SAMX.
.A..A.
XMAS.S
.X....

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

 *
 */

const dirs: [number, number][] = [
  [-1, 0], // up
  [1, 0], // down
  [0, -1], // left
  [0, 1], // right
  [-1, -1], // up-left
  [-1, 1], // up-right
  [1, -1], // down-left
  [1, 1], // down-right
];

const letters = ['X', 'M', 'A', 'S'];

export function day_four_part_one(input: string[]): number {
  let sum = 0;
  for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input[x].length; y++) {
      if (input[x][y] !== 'X') {
        continue;
      }

      const possible_directions = dirs.map(([n_x, n_y]) => [x + n_x, y + n_y]);

      for (let i = 0; i < possible_directions.length; i++) {
        const [n_x, n_y] = possible_directions[i];
        if (
          n_x < 0 ||
          n_y < 0 ||
          n_x > input.length - 1 ||
          n_y > input[n_x].length - 1
        ) {
          continue;
        }

        sum += walk(input, [n_x, n_y], 1, i);
      }
    }
  }

  return sum;
}

function walk(
  input: string[],
  curr_coors: [number, number],
  let_idx: number,
  direction: number
): number {
  const [x, y] = curr_coors;

  if (input[x][y] !== letters[let_idx]) {
    return 0;
  }

  if (let_idx === 3) {
    return 1;
  }

  const [n_x, n_y] = [x + dirs[direction][0], y + dirs[direction][1]];

  if (
    n_x < 0 ||
    n_y < 0 ||
    n_x > input.length - 1 ||
    n_y > input[n_x].length - 1
  ) {
    return 0;
  }

  return walk(input, [n_x, n_y], let_idx + 1, direction);
}
