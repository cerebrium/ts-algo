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

const possible_directions = [
  [-1, 0], // horizontals
  [1, 0],
  [0, -1], // verticals
  [0, 1],
  [1, 1], // diagonals
  [1, -1],
  [-1, 1],
  [-1, -1],
];

const next_values = ['M', 'A', 'S'];

export function day_four_part_one(input: Array<string>): number {
  let found_xmas = 0;

  for (let row = 0; row < input.length; ++row) {
    for (let column = 0; column < input[row].length; column++) {
      const letter = input[row][column];

      if (letter === 'X') {
        for (let i = 0; i < possible_directions.length; i++) {
          found_xmas += depth_first([row, column], i, input, 0, 0);
        }
      }
    }
  }

  return found_xmas;
}

function depth_first(
  coords: [number, number],
  direction: number,
  input: string[],
  count: number,
  curr_val_idx: number
) {
  const new_coord: [number, number] = [
    coords[0] + possible_directions[direction][0],
    coords[1] + possible_directions[direction][1],
  ];

  if (
    new_coord[0] > input.length - 1 ||
    new_coord[0] < 0 ||
    new_coord[1] > input[0].length - 1 ||
    new_coord[1] < 0
  ) {
    return count;
  }

  if (input[new_coord[0]][new_coord[1]] !== next_values[curr_val_idx]) {
    return count;
  }

  if (next_values[curr_val_idx] === 'S') {
    return count + 1;
  }

  return depth_first(new_coord, direction, input, count, curr_val_idx + 1);
}
