"use strict";
/*
Given a string s, find the length of the longest
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

------------------------------
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

------------------------------
Example 3:

Input: s = "pwwkew"
Output: 3

Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.


using the shifting window approach, this is essentially kadanes
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOfLongestSubstring = void 0;
function lengthOfLongestSubstring(s) {
    const visitedMap = new Map();
    let start = 0;
    let longestSubString = 0;
    for (let end = 0; end < s.length; end++) {
        const hasLetter = visitedMap.get(s[end]);
        if (typeof hasLetter !== 'number') {
            visitedMap.set(s[end], end);
            longestSubString = Math.max(longestSubString, end - start + 1);
            continue;
        }
        for (let idx = start; idx < hasLetter; idx++) {
            visitedMap.delete(s[idx]);
        }
        start = hasLetter + 1;
    }
    return longestSubString;
}
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
//# sourceMappingURL=length_of_longest_substring.js.map