"use strict";
/*
 *
 --- Part Two ---
As you scan through the corrupted memory, you notice that some of the conditional statements are also still intact. If you
handle some of the uncorrupted conditional statements in the program, you might be able to get an even more accurate result.

There are two new instructions you'll need to handle:

The do() instruction enables future mul instructions.
The don't() instruction disables future mul instructions.
Only the most recent do() or don't() instruction applies. At the beginning of the program, mul instructions are enabled.

For example:

xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
This corrupted memory is similar to the example from before, but this time the mul(5,5) and mul(11,8) instructions are
disabled because there is a don't() instruction before them. The other mul instructions function normally, including the
one at the end that gets re-enabled by a do() instruction.

This time, the sum of the results is 48 (2*4 + 8*5).

Handle the new instructions; what do you get if you add up all of the results of just the enabled multiplications?
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_three_part_two = void 0;
const code_1 = require("../part_one/code");
function day_three_part_two(input) {
    let do_status = 0;
    let curr_str = '';
    let curr_idx = 0;
    let curr_write_str = '';
    const curr_str_status = ["don't()", 'do()'];
    const curr_status = [7, 4];
    for (let i = 0; i < input.length; i++) {
        // if we are looking for a don't just write to the string
        // we will parse later
        if (!do_status) {
            curr_write_str += input[i];
        }
        // Look for the next char in either "do()" or "don't()"
        if (input[i] === curr_str_status[do_status][curr_idx]) {
            // curr_str is the current do or dont string
            curr_str += input[i];
            // We found the complete do or dont string -> swap what we
            // are looking for. and turn on or off writing to the
            // overall string
            if (curr_str.length === curr_status[do_status]) {
                // looking for don't, means we were making a searchable string
                // reset the string
                curr_str = '';
                // swap what we are looking for
                do_status = 1 ^ do_status;
                curr_idx = 0;
            }
            curr_idx++;
        }
        else {
            // If we miss an exact char we need to start over looking
            curr_str = '';
            curr_idx = 0;
        }
    }
    const answer = (0, code_1.day_three_part_one)(curr_write_str);
    return answer;
}
exports.day_three_part_two = day_three_part_two;
//# sourceMappingURL=code.js.map