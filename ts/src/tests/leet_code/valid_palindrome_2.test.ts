// Example 1:
//
// Example 2:
//
// Example 3:
//
// Input: s = "abc"
// Output: false

import {validPalindromeTwo} from '../../questions/leet_code/valid_palindrome_2';

test('valid_palindrome_two', () => {
  const isPal = validPalindromeTwo('aba');
  expect(isPal).toBeTruthy();
});

// Explanation: You could delete the character 'c'.
test('valid_palindrome_two', () => {
  const isPal = validPalindromeTwo('abca');
  expect(isPal).toBeTruthy();
});

test('valid_palindrome_two', () => {
  const isPal = validPalindromeTwo('abc');
  expect(isPal).toBeFalsy();
});

test('valid_palindrome_two', () => {
  const isPal = validPalindromeTwo('deeee');
  expect(isPal).toBeTruthy();
});

test('valid_palindrome_two', () => {
  const isPal = validPalindromeTwo('acbbba');
  expect(isPal).toBeTruthy();
});
