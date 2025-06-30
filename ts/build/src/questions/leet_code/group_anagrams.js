"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupAnagrams = void 0;
class Trie {
    constructor(strs) {
        this.head = [];
        this.input = strs;
        this.make_trie(strs);
    }
    make_trie(strs) {
        for (const str of strs) {
            let curr_level = this.head;
            let last_node = null;
            for (let c = 0; c < str.length; c++) {
                let letter = str[c];
                let is_found = false;
                for (let i = 0; i < curr_level.length; i++) {
                    if (curr_level[i].val === letter) {
                        curr_level = curr_level[i].children;
                        last_node = curr_level[i];
                        is_found = true;
                        break;
                    }
                }
                if (!is_found) {
                    const new_node = {
                        val: letter,
                        children: [],
                        is_word: c === str.length - 1 ? true : false,
                    };
                    curr_level.push(new_node);
                    curr_level = new_node.children;
                    continue;
                }
                if (c === str.length - 1) {
                    if (!last_node) {
                        throw new Error('no last node');
                    }
                    last_node.is_word = true;
                }
            }
        }
    }
}
function groupAnagrams(strs) {
    const groups = [];
    // lets make a trie
    let idx = 0;
    const visited = [];
    let current_group = [];
    while (idx < strs.length) {
        if (visited.includes(idx)) {
            idx++;
            continue;
        }
        const curr_string = strs[idx];
        let letters = new Map();
        for (let i = 0; i < curr_string.length; i++) {
            const letter = letters.get(curr_string[i]);
            if (!letter) {
                letters.set(curr_string[i], 1);
            }
            else {
                letters.set(curr_string[i], letter + 1);
            }
        }
        for (let i = 0; i < strs.length; i++) {
            if (i === idx ||
                visited.includes(i) ||
                strs[i].length !== curr_string.length) {
                continue;
            }
            const str_map = new Map();
            for (let x = 0; x < strs[i].length; x++) {
                const letter = str_map.get(strs[i][x]);
                if (!letter) {
                    str_map.set(strs[i][x], 1);
                }
                else {
                    str_map.set(strs[i][x], letter + 1);
                }
            }
            let is_match = true;
            str_map.forEach((v, k) => {
                if (!is_match) {
                    return;
                }
                const curr_string_val = letters.get(k);
                if (!curr_string_val) {
                    is_match = false;
                    return;
                }
                if (curr_string_val !== v) {
                    is_match = false;
                    return;
                }
            });
            if (is_match) {
                // Found one
                visited.push(i, idx);
                current_group.push(curr_string, strs[i]);
            }
        }
        if (current_group.length) {
            groups.push(current_group);
        }
        else {
            groups.push([curr_string]);
        }
        current_group = [];
        idx++;
    }
    console.log('groups: ', groups);
    return groups;
}
exports.groupAnagrams = groupAnagrams;
//# sourceMappingURL=group_anagrams.js.map