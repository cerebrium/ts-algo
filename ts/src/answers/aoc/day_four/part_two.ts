// The Elf looks quizzically at you. Did you misunderstand the assignment?
//
// Looking for the instructions, you flip over the word search to find that this isn't actually an XMAS puzzle; it's an X-MAS puzzle in which you're supposed to find two MAS in the shape of an X. One way to achieve that is like this:
//
// M.S
// .A.
// M.S
// Irrelevant characters have again been replaced with . in the above diagram. Within the X, each MAS can be written forwards or backwards.
//
// Here's the same example from before, but this time all of the X-MASes have been kept instead:
//
// .M.S......
// ..A..MSMS.
// .M.S.MAA..
// ..A.ASMSM.
// .M.S.M....
// ..........
// S.S.S.S.S.
// .A.A.A.A..
// M.M.M.M.M.
// ..........
// In this example, an X-MAS appears 9 times.
//
// Flip the word search from the instructions back over to the word search side and try again. How many times does an X-MAS appear?

const diagonals = [
  [-1, -1], // must be 'm' or 's' and accompanying 2 index
  [-1, 1],
  [1, 1],
  [1, -1],
];

function day_four_part_two(input: Array<string>): number {
  let x_mas_s = 0;

  // Can ignore 0 and last elements, must have 1 in diagonal
  // up and left and right and down
  for (let row = 1; row < input.length - 1; row++) {
    for (let column = 1; column < input[0].length - 1; column++) {
      // Must have a in middle
      if (input[row][column] !== 'A') {
        continue;
      }

      const [a, b, c, d] = diagonals.map(([x, y]) => {
        const [new_x, new_y] = [row + x, column + y];
        return input[new_x][new_y];
      });

      if (
        (a === 'M' && d === 'M' && b === 'S' && c === 'S') ||
        (d === 'S' && c === 'S' && a === 'M' && b === 'M') ||
        (d === 'M' && c === 'M' && a === 'S' && b === 'S') ||
        (c === 'M' && b === 'M' && d === 'S' && a === 'S')
      ) {
        ++x_mas_s;
      }
    }
  }

  return x_mas_s;
}
