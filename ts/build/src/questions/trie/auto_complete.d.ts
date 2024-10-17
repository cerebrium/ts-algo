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
export declare class Autocomplete {
    private trie;
    constructor();
    add_word(word: string): void;
    retrieve_words(substring: string): Array<string>;
    private _get_nested_words;
}
