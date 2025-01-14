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

type StringMap = {
  isWord: boolean;
  value: string;
  children: StringMap;
};

class ListOfWords {
  trie: StringMap | null = null;

  constructor(input: string[]) {
    this._make_trie(input);
  }

  private _make_trie(input: string[]): void {
    for (let i = 0; i < input.length; i++) {
      const word = input[i];

      let current_level = this.trie;
    }
  }
}
