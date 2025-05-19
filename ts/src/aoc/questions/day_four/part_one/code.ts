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

  for (let column = 0; column < input.length; column++) {
    for (let row = 0; row < input[column].length; row++) {
      if (input[column][row] === 'X') {
        for (let i = 0; i < dirs.length; i++) {
          sum += walk(input, [column, row], 0, i);
        }
      }
    }
  }

  return sum;
}

function walk(
  maze: string[],
  curr_coord: [number, number],
  letter: number,
  direction: number
): number {
  const [x, y] = curr_coord;

  const found_val = maze[x][y];

  if (found_val !== letters[letter]) {
    return 0;
  }

  if (found_val === 'S') {
    return 1;
  }

  const next_coord: [number, number] = [
    x + dirs[direction][0],
    y + dirs[direction][1],
  ];

  if (
    next_coord[0] < 0 ||
    next_coord[0] > maze.length - 1 ||
    next_coord[1] < 0 ||
    next_coord[1] > maze[next_coord[0]].length - 1
  ) {
    return 0;
  }

  return walk(maze, next_coord, letter + 1, direction);
}
