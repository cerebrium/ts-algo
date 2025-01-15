export declare function list_of_words(input: string[], prefix: string): string[];
type Trie = Map<string, TrieNode>;
type TrieNode = {
    isWord: boolean;
    children: Trie;
    order: Trie[];
};
export declare class ListOfWords {
    trie: Trie;
    constructor(input: string[]);
    get_list_of_words(prefix: string): string[];
    private _make_trie;
    private _make_words;
}
export {};
