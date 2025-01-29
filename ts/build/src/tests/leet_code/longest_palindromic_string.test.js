"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const longest_palindromic_string_1 = require("../../questions/leet_code/longest_palindromic_string");
test('longest_palindromic_string', () => {
    /*
        Example 1:
  
        Input: s = "babad"
        Output: "bab"
        Explanation: "aba" is also a valid answer.
        Example 2:
  
        Input: s = "cbbd"
        Output: "bb"
    */
    let answer = (0, longest_palindromic_string_1.longestPalindrome)('babad');
    const expected_answers = ['aba', 'bab'];
    expect(expected_answers.includes(answer)).toBeTruthy();
    answer = (0, longest_palindromic_string_1.longestPalindrome)('cbbd');
    expect(answer).toEqual('bb');
});
//# sourceMappingURL=longest_palindromic_string.test.js.map