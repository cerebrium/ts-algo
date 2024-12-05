/**
 *
 * https://adventofcode.com/2024/day/4#part2
 *
 * For this i will go to every 'a', from there check diagonal
 * nodes. If diagonals contain 2 's' and 2 'm' and s or m aren't
 * diagonal to each other, then its a find.
 *
 * To save time, will only parse inner loops, i.e. the
 * most top, right, left, and bottom rows will be ignored,
 * since there aren't possible diagonals for them, will also
 * make it easier to do edge checking.
 *
 */
export declare function day_four_part_two(input: Array<string>): number;
