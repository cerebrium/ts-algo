"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const length_of_longest_substring_1 = require("../../questions/leet_code/length_of_longest_substring");
test('length_longest_substring', () => {
    const answer = (0, length_of_longest_substring_1.lengthOfLongestSubstring)('abcabcbb');
    expect(answer).toEqual(3);
});
test('length_longest_substring', () => {
    const answer = (0, length_of_longest_substring_1.lengthOfLongestSubstring)('bbbbb');
    expect(answer).toEqual(1);
});
test('length_longest_substring', () => {
    const answer = (0, length_of_longest_substring_1.lengthOfLongestSubstring)('pwwkew');
    expect(answer).toEqual(3);
});
test('length_longest_substring', () => {
    const answer = (0, length_of_longest_substring_1.lengthOfLongestSubstring)(' ');
    expect(answer).toEqual(1);
});
test('length_longest_substring', () => {
    const answer = (0, length_of_longest_substring_1.lengthOfLongestSubstring)('');
    expect(answer).toEqual(0);
});
test('length_longest_substring', () => {
    const answer = (0, length_of_longest_substring_1.lengthOfLongestSubstring)('au');
    expect(answer).toEqual(2);
});
test('length_longest_substring', () => {
    const answer = (0, length_of_longest_substring_1.lengthOfLongestSubstring)('abba');
    expect(answer).toEqual(2);
});
test('length_longest_substring', () => {
    const answer = (0, length_of_longest_substring_1.lengthOfLongestSubstring)('aab');
    expect(answer).toEqual(2);
});
test('length_longest_substring', () => {
    const answer = (0, length_of_longest_substring_1.lengthOfLongestSubstring)('tmmzuxt');
    expect(answer).toEqual(5);
});
//# sourceMappingURL=length_of_longest_substring.test.js.map