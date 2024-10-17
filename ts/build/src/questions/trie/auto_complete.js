"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = void 0;
/**
 *
 * The decision has been made to use arrays as the underlying data
 * structure. The highest possible number of descendents is 26. At
 * n=26, arrays should always outperform objects or maps. The vast
 * majority of the time there will not be 26 elements in the array
 * anyways.
 *
 * To make this more performant, we don't need to have the arraylist
 * implementation from js here either. We can utilize typed arrays
 * so that the allocation of the underlying data structure can
 * match the type of input.
 *
 */
class Autocomplete {
    constructor() {
        this.trie = [];
    }
    // We could optimize this to use specific arrays of length
    // if we had a arraylist implementation using typed arrays
    add_word(word) {
        let current_value = null;
        let current_level = this.trie;
        for (let letter = 0; letter < word.length; letter++) {
            // Search current level in trie for letter
            for (let i = 0; i < current_level.length; i++) {
                if (current_level[i].value === word[letter]) {
                    current_value = current_level[i].value;
                    current_level = current_level[i].decendents;
                    // Only break inner loop
                    break;
                }
            }
            // Found the value continue to next letter
            // if (current_value && current_value === word[letter]) {
            //   console.log('continuing: ', current_value);
            //   continue;
            // }
            // Did not find value add value
            current_level.push({ value: word[letter], decendents: [] });
            // Re-ref to newly created element
            current_level = current_level[current_level.length - 1].decendents;
        }
        const jsoned_trie = JSON.stringify(this.trie);
        console.log(jsoned_trie);
    }
    retrieve_words(substring) {
        const possible_words = [];
        let current_level = this.trie;
        let current_value = null;
        // Get to the correct starting point for the substring
        for (let letter = 0; letter < substring.length; letter++) {
            for (let i = 0; i < current_level.length; i++) {
                if (current_level[i].value === substring[letter]) {
                    current_value = current_level[i].value;
                    current_level = current_level[i].decendents;
                    break;
                }
            }
            if (current_value && current_value === substring[letter]) {
                continue;
            }
            else {
                // At this point we have no saved words that match our prefix
                return possible_words;
            }
        }
        // At this point, traverse all remaining possibilities
        this._get_nested_words(current_level, possible_words, substring);
        return possible_words;
    }
    _get_nested_words(current_level, possible_words, prefix) {
        for (let i = 0; i < current_level.length; i++) {
            if (current_level[i].decendents.length <= 0) {
                // End of word
                possible_words.push(prefix + current_level[i].value);
                continue;
            }
            // Find all children
            this._get_nested_words(current_level[i].decendents, possible_words, prefix + current_level[i].value);
        }
    }
}
exports.Autocomplete = Autocomplete;
//# sourceMappingURL=auto_complete.js.map