/*
    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
    (you may want to display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

    Write the code that will take a string and make this conversion given a number of rows:

    string convert(string s, int numRows);
    

    Example 1:

    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"
    Example 2:

    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I
    Example 3:

    Input: s = "A", numRows = 1
    Output: "A"
*/

export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  /*
   *
   * write the letters where they belong. Then map through and
   * read them out.
   *
   * with the number of rows, pre allocate a matrix.
   *
   * Walk down, then up. Keep a bool for up and down.
   *
   * If going up, also go right one.
   * if going down, just go down.
   *
   *
   */

  let is_down: boolean = true;
  const width: number = Math.ceil(
    s.length / numRows + (numRows - 2) * Math.ceil(s.length / numRows)
  );
  const matrix: Array<string[]> = new Array(numRows);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(width).fill('');
  }
  let col: number = 0;
  let row: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (is_down) {
      matrix[row][col] = s[i];

      if (row === numRows - 1) {
        is_down = false;
        col++;
        row--;

        continue;
      }

      row++;
      continue;
    }

    matrix[row][col] = s[i];

    if (row === 0) {
      is_down = true;
      row++;
      continue;
    }

    col++;
    row--;
  }

  // Walk through the rows and create the string to return
  let final_string = '';
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y]) {
        final_string += matrix[x][y];
      }
    }
  }

  return final_string;
}
