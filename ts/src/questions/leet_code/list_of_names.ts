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
