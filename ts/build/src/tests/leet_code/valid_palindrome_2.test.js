"use strict";
// Example 1:
//
// Example 2:
//
// Example 3:
//
// Input: s = "abc"
// Output: false
Object.defineProperty(exports, "__esModule", { value: true });
const valid_palindrome_2_1 = require("../../questions/leet_code/valid_palindrome_2");
test('valid_palindrome_two', () => {
    const isPal = (0, valid_palindrome_2_1.validPalindromeTwo)('aba');
    expect(isPal).toBeTruthy();
});
// Explanation: You could delete the character 'c'.
test('valid_palindrome_two', () => {
    const isPal = (0, valid_palindrome_2_1.validPalindromeTwo)('abca');
    expect(isPal).toBeTruthy();
});
test('valid_palindrome_two', () => {
    const isPal = (0, valid_palindrome_2_1.validPalindromeTwo)('abc');
    expect(isPal).toBeFalsy();
});
test('valid_palindrome_two', () => {
    const isPal = (0, valid_palindrome_2_1.validPalindromeTwo)('deeee');
    expect(isPal).toBeTruthy();
});
test('valid_palindrome_two', () => {
    const isPal = (0, valid_palindrome_2_1.validPalindromeTwo)('acbbba');
    expect(isPal).toBeTruthy();
});
//# sourceMappingURL=valid_palindrome_2.test.js.map