"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const group_anagrams_1 = require("../../questions/leet_code/group_anagrams");
test('group_anagrams', () => {
    /*
     
    Example 1:
  
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  
    Explanation:
  
    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
  
  
  
  
    Example 2:
  
    Input: strs = [""]
    Output: [[""]]
  
  
  
  
    Example 3:
  
    Input: strs = ["a"]
    Output: [["a"]]
  
  */
    let answer = (0, group_anagrams_1.groupAnagrams)(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    expect(answer[0].length).toBe(1);
    expect(answer[1].length).toBe(2);
    expect(answer[2].length).toBe(3);
    // answer = groupAnagrams(['']);
    // expect(answer[0]).toEqual(['']);
    //
    // answer = groupAnagrams(['a']);
    // expect(answer[0]).toEqual(['a']);
});
//# sourceMappingURL=groups_anagrams.test.js.map