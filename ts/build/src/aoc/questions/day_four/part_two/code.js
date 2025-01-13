"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_four_part_two = void 0;
const diagonals = [
    [-1, -1],
    [-1, 1],
    [1, 1],
    [1, -1], // d-l
];
function day_four_part_two(input) {
    let x_mas_s = 0;
    for (let row = 1; row < input.length - 1; row++) {
        for (let column = 1; column < input[row].length - 1; column++) {
            if (input[row][column] !== 'A') {
                continue;
            }
            const letters = diagonals.map(([x, y], _) => {
                return input[x + row][y + column];
            });
            let m_sum = 0;
            let s_sum = 0;
            let should_continue = false;
            for (let i = 0; i < letters.length; i++) {
                if (letters[i] === 'M') {
                    m_sum++;
                    continue;
                }
                if (letters[i] === 'S') {
                    s_sum++;
                    continue;
                }
                should_continue = true;
                break;
            }
            if (should_continue || m_sum !== 2 || s_sum !== 2) {
                continue;
            }
            const [u_l, u_r, d_r, d_l] = letters;
            // Check for the combos
            if ((u_l === 'M' && u_r === 'M' && d_l === 'S' && d_r === 'S') ||
                (d_l === 'M' && d_r === 'M' && u_l === 'S' && u_r === 'S') ||
                (u_l === 'M' && d_l === 'M' && u_r === 'S' && d_r === 'S') ||
                (u_r === 'M' && d_r === 'M' && u_l === 'S' && d_l === 'S')) {
                x_mas_s++;
            }
        }
    }
    return x_mas_s;
}
exports.day_four_part_two = day_four_part_two;
//# sourceMappingURL=code.js.map