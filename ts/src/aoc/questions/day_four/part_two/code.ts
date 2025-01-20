// The Elf looks quizzically at you. Did you misunderstand the assignment?
//
// Looking for the instructions, you flip over the word search to find that this isn't actually an XMAS puzzle;
// it's an X-MAS puzzle in which you're supposed to find two MAS in the shape of an X. One way to achieve that is like this:
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
//

const diagonals: [number, number][] = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

export function day_four_part_two(input: Array<string>): number {
  let answer = 0;

  for (let row = 1; row < input.length - 1; row++) {
    for (let column = 1; column < input[row].length - 1; column++) {
      if (input[row][column] === 'A') {
        if (check_diagonals(input, [row, column])) {
          answer++;
        }
      }
    }
  }

  return answer;
}

function check_diagonals(input: string[], coord: [number, number]): boolean {
  const [upper_left, upper_right, lower_left, lower_right] = diagonals
    .map(([x, y]) => {
      return [x + coord[0], y + coord[1]];
    })
    .map(([x, y]) => {
      return input[x][y];
    });

  if (
    (upper_left === 'M' &&
      upper_right === 'M' &&
      lower_right === 'S' &&
      lower_left === 'S') ||
    (upper_left === 'M' &&
      lower_left === 'M' &&
      upper_right === 'S' &&
      lower_right === 'S') ||
    (lower_right === 'M' &&
      upper_right === 'M' &&
      lower_left === 'S' &&
      upper_left === 'S') ||
    (lower_left === 'M' &&
      lower_right === 'M' &&
      upper_right === 'S' &&
      upper_left === 'S')
  ) {
    return true;
  }
  return false;
}
