"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./aoc/questions/day_five/data");
const code_non_graph_1 = require("./aoc/questions/day_five/part_one/code_non_graph");
const answer = (0, code_non_graph_1.day_five_non_graph_part_one)(data_1.day_five_orderings, data_1.day_five_input);
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
//# sourceMappingURL=index.js.map