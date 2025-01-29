"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_two_numbers_1 = require("../../questions/leet_code/add_two_numbers");
test('add_two_numbers', () => {
    // Input: l1 = [2,4,3], l2 = [5,6,4]
    // Output: [7,0,8]
    const node_one = new add_two_numbers_1.ListNode(2, new add_two_numbers_1.ListNode(4, new add_two_numbers_1.ListNode(3)));
    const node_two = new add_two_numbers_1.ListNode(5, new add_two_numbers_1.ListNode(6, new add_two_numbers_1.ListNode(4)));
    const answer = (0, add_two_numbers_1.addTwoNumbers)(node_one, node_two);
    const nums = [];
    console.log('what is the answer: ', answer);
    let curr_node = answer;
    while (curr_node) {
        nums.push(curr_node.val);
        curr_node = curr_node.next;
    }
    if (nums.length !== 3) {
        throw new Error('wrong array size');
    }
    expect(nums[0]).toBe(7);
    expect(nums[1]).toBe(0);
    expect(nums[2]).toBe(8);
});
test('add_two_numbers_remainder', () => {
    // input =  [9,9,9,9,9,9,9]
    // input = [9,9,9,9]
    // output = [8,9,9,9,0,0,0,1]
    const input_one = [9, 9, 9, 9, 9, 9, 9];
    const input_two = [9, 9, 9, 9];
    const node_one = new add_two_numbers_1.ListNode(input_one[0]);
    let curr_node_one = node_one;
    for (let i = 1; i < input_one.length; i++) {
        curr_node_one.next = new add_two_numbers_1.ListNode(input_one[i]);
        curr_node_one = curr_node_one.next;
    }
    const node_two = new add_two_numbers_1.ListNode(input_two[0]);
    let curr_node_two = node_two;
    for (let i = 1; i < input_two.length; i++) {
        curr_node_two.next = new add_two_numbers_1.ListNode(input_two[i]);
        curr_node_two = curr_node_two.next;
    }
    const answer = (0, add_two_numbers_1.addTwoNumbers)(node_one, node_two);
    const nums = [];
    let curr_node = answer;
    while (curr_node) {
        nums.push(curr_node.val);
        curr_node = curr_node.next;
    }
    const expected = [8, 9, 9, 9, 0, 0, 0, 1];
    if (nums.length !== expected.length) {
        throw new Error('wrong array size');
    }
    for (let i = 0; i < expected.length; i++) {
        expect(nums[i]).toEqual(expected[i]);
    }
});
//# sourceMappingURL=add_two_number.test.js.map