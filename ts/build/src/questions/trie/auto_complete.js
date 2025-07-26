"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = void 0;
class TNode {
    constructor(isWord, children = new Map()) {
        this.isWord = isWord;
        this.children = children;
    }
}
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
        this.data = new Map();
    }
    push(word) {
        let currChildren = this.data;
        let currNode = null;
        let wordIdx = 0;
        for (let i = 0; i < word.length; i++) {
            const hasLetter = currChildren.get(word[i]);
            if (!hasLetter) {
                break;
            }
            if (i === word.length - 1) {
                if (!currNode) {
                    throw new Error('Last letter, but no node');
                }
                currNode.isWord = true;
            }
            currChildren = hasLetter.children;
            currNode = hasLetter;
            wordIdx++;
            continue;
        }
        while (wordIdx < word.length) {
            const newTNode = new TNode(wordIdx === word.length - 1);
            currChildren.set(word[wordIdx], newTNode);
            currChildren = newTNode.children;
            wordIdx++;
        }
    }
    get(prefix) {
        const words = [];
        let currChildren = this.data;
        let letterIdx = 0;
        for (let i = 0; i < prefix.length; i++) {
            const hasLetter = currChildren.get(prefix[i]);
            if (!hasLetter) {
                break;
            }
            letterIdx++;
            currChildren = hasLetter.children;
        }
        this.completeWords(prefix.substring(0, letterIdx), currChildren, words);
        return words;
    }
    completeWords(prefix, currChildren, words) {
        currChildren.forEach((_node, letter) => {
            if (_node.isWord) {
                words.push(prefix + letter);
            }
            this.completeWords(prefix + letter, _node.children, words);
        });
    }
}
exports.Autocomplete = Autocomplete;
//# sourceMappingURL=auto_complete.js.map