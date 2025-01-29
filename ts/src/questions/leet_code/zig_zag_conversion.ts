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

// export function convert(s: string, numRows: number): string {
//   if (numRows === 1) {
//     return s;
//   }
//
//   if (numRows === 2) {
//     let final_string = '';
//
//     for (let i = 0; i < s.length; i += 2) {
//       final_string += s[i];
//     }
//
//     for (let i = 1; i < s.length; i += 2) {
//       final_string += s[i];
//     }
//
//     return final_string;
//   }
//   // Make matrix
//   const final_matrix: Array<string[]> = [];
//   for (let i = 0; i < numRows; i++) {
//     final_matrix.push(new Array(s.length).fill(null));
//   }
//
//   let current_column = 0;
//   let row_fill = 0;
//   let is_diagonal = false;
//   let current_diagonal_row_fill = numRows - 2;
//
//   for (const letter of s) {
//     // Non-diagonal
//     if (!is_diagonal && row_fill < numRows) {
//       final_matrix[row_fill][current_column] = letter;
//
//       if (row_fill + 1 === numRows) {
//         current_column++;
//         is_diagonal = true;
//         row_fill = 0;
//         continue;
//       }
//
//       row_fill++;
//
//       continue;
//     }
//
//     // Diagonal -> fill diagonally up and right one value
//     final_matrix[current_diagonal_row_fill][current_column] = letter;
//     current_column++;
//     current_diagonal_row_fill--;
//
//     if (current_diagonal_row_fill === 0) {
//       is_diagonal = false;
//       current_diagonal_row_fill = numRows - 2;
//     }
//   }
//
//   let final_string: string = '';
//
//   // Loop through the matrix and create our string
//   for (let row = 0; row < final_matrix.length; row++) {
//     for (let column = 0; column < final_matrix[row].length; column++) {
//       if (final_matrix[row][column]) {
//         final_string += final_matrix[row][column];
//       }
//     }
//   }
//
//   return final_string;
// }
//

export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  if (numRows === 2) {
    let final_string = '';

    for (let i = 0; i < s.length; i += 2) {
      final_string += s[i];
    }

    for (let i = 1; i < s.length; i += 2) {
      final_string += s[i];
    }

    return final_string;
  }
  // Make matrix
  const final_matrix: string[] = [];
  for (let i = 0; i < numRows; i++) {
    final_matrix.push('');
  }

  let current_column = 0;
  let row_fill = 0;
  let is_diagonal = false;
  let current_diagonal_row_fill = numRows - 2;

  for (const letter of s) {
    // Non-diagonal
    if (!is_diagonal && row_fill < numRows) {
      final_matrix[row_fill].concat(letter);

      if (row_fill + 1 === numRows) {
        current_column++;
        is_diagonal = true;
        row_fill = 0;
        continue;
      }

      row_fill++;

      continue;
    }

    // Diagonal -> fill diagonally up and right one value
    final_matrix[current_diagonal_row_fill].concat(letter);
    current_column++;
    current_diagonal_row_fill--;

    if (current_diagonal_row_fill === 0) {
      is_diagonal = false;
      current_diagonal_row_fill = numRows - 2;
    }
  }

  let final_string: string = '';

  for (let i = 0; i < final_matrix.length; i++) {
    final_string = final_string.concat(final_matrix[i]);
  }

  return final_string;
}
