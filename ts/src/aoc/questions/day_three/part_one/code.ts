/*
 * It seems like the goal of the program is just to multiply some numbers. It does that with instructions like mul(X,Y),
 * where X and Y are each 1-3 digit numbers. For instance, mul(44,46) multiplies 44 by 46 to get a result of 2024. Similarly,
 * mul(123,4) would multiply 123 by 4.

However, because the program's memory has been corrupted, there are also many invalid characters that should be ignored, even
if they look like part of a mul instruction. Sequences like mul(4*, mul(6,9!, ?(12,34), or mul ( 2 , 4 ) do nothing.

For example, consider the following section of corrupted memory:

xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
Only the four highlighted sections are real mul instructions. Adding up the result of each instruction produces 161 (2*4 + 5*5 + 11*8 + 8*5).

Scan the corrupted memory for uncorrupted mul instructions. What do you get if you add up all of the results of the multiplications?
*/

export function day_three_part_one(input: string): number {
  let answer = 0;

  const muls = input
    .split('mul(')
    .flatMap(substr => {
      return substr.split(')');
    })
    .map(substr => {
      return substr.split(',');
    });

  for (const possible_nums of muls) {
    if (
      possible_nums.length === 2 &&
      !possible_nums
        .map(p_n => isNaN(p_n as any))
        .some(parsed_p_n => parsed_p_n)
    ) {
      const [x, y] = possible_nums;
      const parserd_x = parseInt(x);
      const parserd_y = parseInt(y);

      if (parserd_x || parserd_y) {
        answer += parserd_x * parserd_y;
      }
    }
  }

  return answer;
}
