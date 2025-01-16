export declare function list_of_words(input: string[], prefix: string): string[];
type Trie = Map<string, TrieNode>;
export type TrieNode = {
    isWord: boolean;
    children: Trie;
    order: TrieBTree;
};
export declare class ListOfWords {
    trie: Trie;
    constructor(input: string[]);
    get_list_of_words(prefix: string): string[];
    private _make_trie;
    private _make_words;
}
export type HeapTrieNode = {
    letter: string;
    node: TrieNode;
    left: HeapTrieNode | null;
    right: HeapTrieNode | null;
};
export declare class TrieBTree {
    root: null | HeapTrieNode;
    constructor();
    add(trie_val: [string, TrieNode]): void;
    return_nodes(): Array<[string, TrieNode]>;
    private in_order_walk;
    private add_walk;
    private make_heap_trie_node;
}
export {};
