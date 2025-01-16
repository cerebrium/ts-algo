/*
 * Simplest answer, but every time you want to change the input has
 * to recompute everything. 'writes' are same speed as 'reads', and
 * both are fairly slow.
 *
 */
export function list_of_words(input: string[], prefix: string): string[] {
  const final_array: string[] = [];

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

type Trie = Map<string, TrieNode>;
export type TrieNode = {
  isWord: boolean;
  children: Trie;
  order: TrieBTree;
};

export class ListOfWords {
  trie: Trie = new Map();

  constructor(input: string[]) {
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
  public get_list_of_words(prefix: string) {
    const words_in_trie: string[] = [];

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

    node_to_traverse?.children.forEach(element => {
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
  private _make_trie(input: string[]): void {
    for (let i = 0; i < input.length; i++) {
      const word = input[i];

      let current_level = this.trie;
      let current_node: TrieNode | null = null;
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
          current_level = current_level.get(word[letter_idx])!.children;
          continue;
        }

        current_node.order.add([word[letter_idx], new_trie_node]);
        current_node = new_trie_node;

        // Add node to b-tree
        current_level = current_level.get(word[letter_idx])!.children;
      }
    }
  }

  /*
   *
   * Instead of using the pure trie for this, we will
   * walk the returned in-order nodes from the order.
   *
   */
  private _make_words(
    current_level: TrieNode,
    current_word: string,
    word_list: string[],
    runs: number = 0
  ): void {
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

export type HeapTrieNode = {
  letter: string;
  node: TrieNode;
  left: HeapTrieNode | null;
  right: HeapTrieNode | null;
};

/*
 *
 * If we perform a balancing algorithm on this,
 * then we will have a decently performing tree.
 *
 * There will be an avl implementation coming
 *
 */

// TODO: avl balancing implementation on node addition
export class TrieBTree {
  root: null | HeapTrieNode;

  constructor() {
    this.root = null;
  }

  // We want to place the nodes in alphabetical order
  add(trie_val: [string, TrieNode]) {
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
  public return_nodes(): Array<[string, TrieNode]> {
    const nodes: Array<[string, TrieNode]> = [];

    this.in_order_walk(this.root, nodes);

    return nodes;
  }

  private in_order_walk(
    node: HeapTrieNode | null,
    node_arr: Array<[string, TrieNode]>
  ) {
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
  private add_walk(
    node: HeapTrieNode | null,
    node_to_add: HeapTrieNode,
    parent: HeapTrieNode,
    direction: 0 | 1
  ): void {
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

  private make_heap_trie_node(trie_val: [string, TrieNode]) {
    return {
      letter: trie_val[0],
      node: trie_val[1],
      left: null,
      right: null,
    };
  }
}
