import {day_six_input, day_six_test_input} from './aoc/questions/day_six/data';
import {DaySixPartTwo} from './aoc/questions/day_six/part_two/code';

const day_six = new DaySixPartTwo(day_six_test_input);

const answer = day_six.day_six_part_two();

console.log('the answer: ', answer);
