import {lengthOfLongestSubstring} from '../../questions/leet_code/length_of_longest_substring';

test('length_longest_substring', () => {
  const answer = lengthOfLongestSubstring('abcabcbb');
  expect(answer).toEqual(3);
});

test('length_longest_substring', () => {
  const answer = lengthOfLongestSubstring('bbbbb');
  expect(answer).toEqual(1);
});

test('length_longest_substring', () => {
  const answer = lengthOfLongestSubstring('pwwkew');
  expect(answer).toEqual(3);
});

test('length_longest_substring', () => {
  const answer = lengthOfLongestSubstring(' ');
  expect(answer).toEqual(1);
});

test('length_longest_substring', () => {
  const answer = lengthOfLongestSubstring('');
  expect(answer).toEqual(0);
});

test('length_longest_substring', () => {
  const answer = lengthOfLongestSubstring('au');
  expect(answer).toEqual(2);
});

test('length_longest_substring', () => {
  const answer = lengthOfLongestSubstring('abba');
  expect(answer).toEqual(2);
});

test('length_longest_substring', () => {
  const answer = lengthOfLongestSubstring('aab');
  expect(answer).toEqual(2);
});

test('length_longest_substring', () => {
  const answer = lengthOfLongestSubstring('tmmzuxt');
  expect(answer).toEqual(5);
});
