"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_of_names_1 = require("../../questions/leet_code/list_of_names");
test('TrieBTree', () => {
    const t_b_t = new list_of_names_1.TrieBTree();
    function makeTrieNode() {
        return {
            isWord: false,
            children: new Map(),
            // For this test we don't care about this
            order: [],
        };
    }
    const expected_res = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    for (let i = expected_res.length - 1; i > -1; i--) {
        t_b_t.add([expected_res[i], makeTrieNode()]);
    }
    const nodes = t_b_t.return_nodes();
    for (let i = 0; i < expected_res.length; i++) {
        expect(nodes[i][0]).toBe(expected_res[i]);
    }
});
//# sourceMappingURL=trie_b_tree.test.js.map