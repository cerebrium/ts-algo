"use strict";
/*
 const test_data = [
  '190: 10 19',
  '3267: 81 40 27',
  '83: 17 5',
  '156: 15 6',
  '7290: 6 8 6 15',
  '161011: 16 10 13',
  '192: 17 8 14',
  '21037: 9 7 18 13',
  '292: 11 6 16 20',
];
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_seven_part_one = void 0;
function day_seven_part_one(input) {
    let sum = 0;
    for (let line of input) {
        const [target, nums] = line.split(':');
        const parsed_target = parseInt(target);
        const parsed_nums = nums
            .trim()
            .split(' ')
            .map(num => parseInt(num.trim()));
        const is_true = depth_first_try(parsed_nums, 1, '+', parsed_nums[0], parsed_target) ||
            depth_first_try(parsed_nums, 1, '*', parsed_nums[0], parsed_target);
        if (is_true) {
            sum += parsed_target;
        }
    }
    return sum;
}
exports.day_seven_part_one = day_seven_part_one;
function depth_first_try(input, idx, operand, sum, target) {
    if (idx > input.length - 1) {
        return false;
    }
    let new_sum = operand === '+' ? input[idx] + sum : input[idx] * sum;
    // console.log('What is the new sum: ', new_sum);
    if (new_sum === target) {
        return true;
    }
    const is_true = depth_first_try(input, idx + 1, '+', new_sum, target) ||
        depth_first_try(input, idx + 1, '*', new_sum, target);
    if (is_true) {
        return true;
    }
    return false;
}
//# sourceMappingURL=code.js.map