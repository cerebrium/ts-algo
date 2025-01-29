import {longestPalindrome} from '../../questions/leet_code/longest_palindromic_string';

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

  let answer = longestPalindrome('babad');

  const expected_answers = ['aba', 'bab'];
  expect(expected_answers.includes(answer)).toBeTruthy();

  answer = longestPalindrome('cbbd');
  expect(answer).toEqual('bb');
});
