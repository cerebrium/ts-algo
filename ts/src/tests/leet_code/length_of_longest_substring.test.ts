import {lengthOfLongestSubstring} from '../../questions/leet_code/length_of_longest_substring';

test('length_longest_substring', () => {
  let answer = lengthOfLongestSubstring('abcabcbb');
  expect(answer).toEqual(3);

  answer = lengthOfLongestSubstring('bbbbb');
  expect(answer).toEqual(1);

  answer = lengthOfLongestSubstring('pwwkew');
  expect(answer).toEqual(3);

  answer = lengthOfLongestSubstring(' ');
  expect(answer).toEqual(1);

  answer = lengthOfLongestSubstring('');
  expect(answer).toEqual(0);

  answer = lengthOfLongestSubstring('au');
  expect(answer).toEqual(2);

  answer = lengthOfLongestSubstring('abba');
  expect(answer).toEqual(2);

  answer = lengthOfLongestSubstring('aab');
  expect(answer).toEqual(2);

  answer = lengthOfLongestSubstring('tmmzuxt');
  expect(answer).toEqual(5);
});
