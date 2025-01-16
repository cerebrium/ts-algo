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
type TrieNode = {
  isWord: boolean;
  children: Trie;
  order: Trie[];
};

export class ListOfWords {
  trie: Trie = new Map();

  constructor(input: string[]) {
    this._make_trie(input);
  }

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

  // We want to make sure the letters are entered in alphabetically
  // The top level does not need to be alphabetized, because we always
  // will be searching for something, with at least one prefix letter.
  private _make_trie(input: string[]): void {
    for (let i = 0; i < input.length; i++) {
      const word = input[i];

      let current_level = this.trie;
      for (let letter_idx = 0; letter_idx < word.length; letter_idx++) {
        const child_node = current_level.get(word[letter_idx]);

        if (child_node) {
          if (letter_idx === word.length - 1) {
            child_node.isWord = true;
            break;
          }

          current_level = child_node['children'];
          continue;
        }

        // To unsure that the keys (letters) are alphabetized, which
        // will allow us to return the words in alphabetical order,
        // we want to sort the keys after each entry. These arrays are
        // at max 26 as a length, and we are only inserting one element,
        // so if we add the element, then use bubble sort, we should
        // be able to do this in O(n) time
        //
        // We can't sort the keys in the map, so we will instead keep
        // an ordering array on the map as well.

        current_level.set(word[letter_idx], {
          isWord: letter_idx === word.length - 1,
          children: new Map(),
          order: [],
        });

        current_level = current_level.get(word[letter_idx])!.children;
      }
    }
  }

  private _make_words(
    current_level: TrieNode,
    current_word: string,
    word_list: string[]
  ): void {
    if (current_level.isWord) {
      word_list.push(current_word);
    }

    current_level.children.forEach((element, key) => {
      this._make_words(element, current_word + key, word_list);
    });
  }
}

// Min heap implementation

class MinHeap<T> {
  data: Array<T> = [];

  public add(val: T): void {
    this.data.push(val);
    if (this.data.length < 2) {
      return;
    }

    this.bubble_up();
  }

  public pop(): T | null {
    if (this.data.length < 1) {
      return null;
    }
    const val_to_return = this.data[0];

    if (this.data.length < 3) {
    }

    return val_to_return;
  }

  private heapify_down() {
    let parent_idx: number = 0;
    let smallest_child_idx = this.get_lowest_child(
      this.get_left_child(parent_idx),
      this.get_right_child(parent_idx)
    );

    if (!smallest_child_idx) {
      return;
    }

    while (this.data[smallest_child_idx] < this.data[parent_idx]) {
      this.swap(smallest_child_idx, parent_idx);
      const new_smallest_child_idx = this.get_lowest_child(
        this.get_left_child(smallest_child_idx),
        this.get_right_child(smallest_child_idx)
      );

      if (!new_smallest_child_idx) {
        return;
      }

      parent_idx = smallest_child_idx;
      smallest_child_idx = new_smallest_child_idx;
    }
  }

  private bubble_up() {
    let current_idx: number = this.data.length - 1;
    let parent_idx = this.get_parent(current_idx);

    if (!parent_idx) {
      return;
    }

    while (this.data[current_idx] < this.data[parent_idx]) {
      this.swap(current_idx, parent_idx);
      const new_parent_idx = this.get_parent(parent_idx);
      if (!new_parent_idx) {
        return;
      }

      current_idx = parent_idx;
      parent_idx = new_parent_idx;
    }
  }
  // Returns idx of child
  private get_left_child(parent_idx: number): null | number {
    const left_child_idx = 2 * parent_idx;

    if (left_child_idx > this.data.length - 1) {
      return null;
    }

    return left_child_idx;
  }

  // Returns idx of child
  private get_right_child(parent_idx: number): null | number {
    const right_child_idx = 2 * parent_idx + 1;

    if (right_child_idx > this.data.length - 1) {
      return null;
    }

    return right_child_idx;
  }

  // Returns idx of parent
  private get_parent(child_idx: number): null | number {
    const parent_idx = Math.floor((child_idx - 1) / 2);

    if (parent_idx < 0) {
      return null;
    }

    return parent_idx;
  }

  private get_lowest_child(
    child_idx_one: number | null,
    child_idx_two: number | null
  ): number | null {
    if (!child_idx_one && !child_idx_two) {
      return null;
    }

    if (!child_idx_one) {
      return child_idx_two;
    }

    if (!child_idx_two) {
      return child_idx_one;
    }

    if (this.data[child_idx_one] < this.data[child_idx_two]) {
      return child_idx_one;
    }

    return child_idx_two;
  }

  private swap(idx_one: number, idx_two: number): void {
    [this.data[idx_one], this.data[idx_two]] = [
      this.data[idx_two],
      this.data[idx_one],
    ];
  }
}
