declare class TNode {
    isWord: boolean;
    children: Map<string, TNode>;
    constructor(isWord: boolean, children?: Map<any, any>);
}
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
    data: Map<string, TNode>;
    constructor();
    push(word: string): void;
    get(prefix: string): string[];
    private completeWords;
}
export {};
