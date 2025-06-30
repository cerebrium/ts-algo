"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const valid_palindrome_1 = require("../../questions/leet_code/valid_palindrome");
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
test('valid_palindrome', () => {
    const s = 'A man, a plan, a canal: Panama';
    expect((0, valid_palindrome_1.isPalindrome)(s)).toBe(true);
});
// Output: false
// Explanation: "raceacar" is not a palindrome.
test('valid_palindrome', () => {
    const s = 'race a car';
    expect((0, valid_palindrome_1.isPalindrome)(s)).toBe(false);
});
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
test('valid_palindrome', () => {
    const s = ' ';
    expect((0, valid_palindrome_1.isPalindrome)(s)).toBe(true);
});
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
test('valid_palindrome', () => {
    const s = '0P';
    expect((0, valid_palindrome_1.isPalindrome)(s)).toBe(false);
});
//# sourceMappingURL=valid_palindrome.test.js.map