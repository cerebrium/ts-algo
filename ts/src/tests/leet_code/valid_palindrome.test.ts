//
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.
//
//
//
// Example 3:
//
// Since an empty string reads the same forward and backward, it is a palindrome.

import {isPalindrome} from '../../questions/leet_code/valid_palindrome';

// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
test('valid_palindrome', () => {
  const s = 'A man, a plan, a canal: Panama';
  expect(isPalindrome(s)).toBe(true);
});

// Output: false
// Explanation: "raceacar" is not a palindrome.
test('valid_palindrome', () => {
  const s = 'race a car';
  expect(isPalindrome(s)).toBe(false);
});

// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
test('valid_palindrome', () => {
  const s = ' ';
  expect(isPalindrome(s)).toBe(true);
});

// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
test('valid_palindrome', () => {
  const s = '0P';
  expect(isPalindrome(s)).toBe(false);
});
