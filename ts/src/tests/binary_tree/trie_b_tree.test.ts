import {TrieBTree, TrieNode} from '../../questions/leet_code/list_of_names';

test('TrieBTree', () => {
  const t_b_t = new TrieBTree();

  function makeTrieNode(): TrieNode {
    return {
      isWord: false,
      children: new Map(),
      // For this test we don't care about this
      order: [] as any,
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
