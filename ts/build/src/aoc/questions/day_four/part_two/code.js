"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_four_part_two = void 0;
const diagonals = [
    [-1, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
];
function day_four_part_two(input) {
    let x_mas_s = 0;
    return x_mas_s;
}
exports.day_four_part_two = day_four_part_two;
//# sourceMappingURL=code.js.map