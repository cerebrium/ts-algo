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
    if (s.length === 1) {
        return 1;
    }
    if (s.length === 0) {
        return 0;
    }
    if (!s) {
        return 0;
    }
    let global_max = 0;
    let local_max = 0;
    let start = 0;
    let end = 0;
    const used_letters = new Map();
    while (end < s.length) {
        const found_idx = used_letters.get(s[end]);
        // Found char
        if (found_idx !== undefined && found_idx >= start) {
            global_max = Math.max(local_max, global_max);
            // we need to reset our start to the index of the value
            start = found_idx + 1;
            // we need to remove the value from the set
            used_letters.set(s[end], end);
            end++;
            local_max = end - start;
            continue;
        }
        // Add the val to the map
        used_letters.set(s[end], end);
        local_max++;
        // increment end
        end++;
    }
    // In the case where there aren't any repeats, the local is higher, and correct
    return Math.max(global_max, local_max);
}
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
//# sourceMappingURL=length_of_longest_substring.js.map