"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrieBTree = exports.ListOfWords = exports.list_of_words = void 0;
/*
 * Simplest answer, but every time you want to change the input has
 * to recompute everything. 'writes' are same speed as 'reads', and
 * both are fairly slow.
 *
 */
function list_of_words(input, prefix) {
    const final_array = [];
    input.sort((a, b) => {
        return a > b ? 1 : -1;
    });
    for (let i = 0; i < input.length; i++) {
        if (input[i].startsWith(prefix)) {
            final_array.push(input[i]);
        }
    }
    return final_array;
}
exports.list_of_words = list_of_words;
class ListOfWords {
    constructor(input) {
        this.trie = new Map();
        this._make_trie(input);
    }
    /*
     *
     * We need to return alphabetized words, to do this,
     * we traverse the prefix, once we get done with the
     * prefix, we then complete following letters by using
     * the in-order list returned from the ordering.
     *
     * The above happens in the _make_words
     *
     */
    get_list_of_words(prefix) {
        const words_in_trie = [];
        let current_level = this.trie;
        let node_to_traverse;
        for (let letter_idx = 0; letter_idx < prefix.length - 1; letter_idx++) {
            const child_node = current_level.get(prefix[letter_idx]);
            if (!child_node) {
                return words_in_trie;
            }
            current_level = child_node.children;
            node_to_traverse = child_node;
        }
        node_to_traverse === null || node_to_traverse === void 0 ? void 0 : node_to_traverse.children.forEach(element => {
            this._make_words(element, prefix, words_in_trie);
        });
        return words_in_trie;
    }
    /*
     *
     * The top level does not have to be alphabetized, it is already
     * always in alphabetical order.
     *
     */
    _make_trie(input) {
        for (let i = 0; i < input.length; i++) {
            const word = input[i];
            let current_level = this.trie;
            let current_node = null;
            for (let letter_idx = 0; letter_idx < word.length; letter_idx++) {
                const child_node = current_level.get(word[letter_idx]);
                /*
                 *
                 * Already added, no need to update the b-tree, however,
                 * we need to track the parent node here so that we can
                 * update it with added children.
                 *
                 */
                if (child_node) {
                    if (letter_idx === word.length - 1) {
                        child_node.isWord = true;
                        break;
                    }
                    current_node = child_node;
                    current_level = child_node['children'];
                    continue;
                }
                /*
                 *
                 * Due to how b-trees work, inser here should be log(n).
                 *
                 * Balancing with the avl will be slower, but can be defered
                 * until nothing else is running...
                 * TODO: implement an async que that calls the avl Balancing
                 * when not scheduled for other work.
                 *
                 * With this, we should get n runtime for traversing the nodes
                 * to get the list of alphabetized letters back.
                 *
                 * There is a memory footprint downside though. maybe a more
                 * optimized way of storing the tree would be good, however,
                 * a heap does not allow for an in-order traversal (that i am aware of)
                 *
                 */
                const new_trie_node = {
                    isWord: letter_idx === word.length - 1,
                    children: new Map(),
                    order: new TrieBTree(),
                };
                current_level.set(word[letter_idx], new_trie_node);
                if (!current_node) {
                    current_node = new_trie_node;
                    current_level = current_level.get(word[letter_idx]).children;
                    continue;
                }
                current_node.order.add([word[letter_idx], new_trie_node]);
                current_node = new_trie_node;
                // Add node to b-tree
                current_level = current_level.get(word[letter_idx]).children;
            }
        }
    }
    /*
     *
     * Instead of using the pure trie for this, we will
     * walk the returned in-order nodes from the order.
     *
     */
    _make_words(current_level, current_word, word_list, runs = 0) {
        if (runs > 10) {
            return;
        }
        if (current_level.isWord) {
            word_list.push(current_word);
        }
        const in_order_children = current_level.order.return_nodes();
        for (const [letter, node] of in_order_children) {
            this._make_words(node, current_word + letter, word_list, runs + 1);
        }
    }
}
exports.ListOfWords = ListOfWords;
/*
 *
 * If we perform a balancing algorithm on this,
 * then we will have a decently performing tree.
 *
 * There will be an avl implementation coming
 *
 */
// TODO: avl balancing implementation on node addition
class TrieBTree {
    constructor() {
        this.root = null;
    }
    // We want to place the nodes in alphabetical order
    add(trie_val) {
        const trie_node = this.make_heap_trie_node(trie_val);
        if (!this.root) {
            this.root = trie_node;
            return;
        }
        // right
        if (trie_node.letter > this.root.letter) {
            return this.add_walk(this.root.right, trie_node, this.root, 1);
        }
        // left
        return this.add_walk(this.root.left, trie_node, this.root, 0);
    }
    // We want to return an array of the letters and their nodes to be
    // able to walk at the trie level. This means an in order traversal.
    return_nodes() {
        const nodes = [];
        this.in_order_walk(this.root, nodes);
        return nodes;
    }
    in_order_walk(node, node_arr) {
        if (!node) {
            return;
        }
        this.in_order_walk(node.left, node_arr);
        node_arr.push([node.letter, node.node]);
        this.in_order_walk(node.right, node_arr);
    }
    // 0 -> left
    // 1 -> right
    // TODO: make this iterative
    add_walk(node, node_to_add, parent, direction) {
        if (!node) {
            direction ? (parent.right = node_to_add) : (parent.left = node_to_add);
            return;
        }
        // right
        if (node_to_add.letter > node.letter) {
            return this.add_walk(node.right, node_to_add, node, 1);
        }
        return this.add_walk(node.left, node_to_add, node, 0);
    }
    make_heap_trie_node(trie_val) {
        return {
            letter: trie_val[0],
            node: trie_val[1],
            left: null,
            right: null,
        };
    }
}
exports.TrieBTree = TrieBTree;
//# sourceMappingURL=list_of_names.js.map