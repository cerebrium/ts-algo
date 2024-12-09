import {
  day_five_input,
  day_five_orderings,
  day_five_test_data,
  day_five_test_ordering,
} from './aoc/questions/day_five/data';
import {day_five_non_graph_part_one} from './aoc/questions/day_five/part_one/code_non_graph';

const answer = day_five_non_graph_part_one(day_five_orderings, day_five_input);

// const day_five = day_five_instantiation;
// day_five.init(day_five_orderings, day_five_input);
//
// const answer = day_five.day_five_part_one();

console.log('the answer: ', answer);
/*
correct: 75,47,61,53,29
97,61,53,29,13
75,29,13

incorrect: 97,13,75,29,47
 */
