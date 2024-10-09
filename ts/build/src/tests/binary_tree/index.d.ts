interface BNode {
    val: number;
    left?: BNode;
    right?: BNode;
}
export declare function make_b_tree(): BNode;
export declare function make_broken_b_tree(): BNode;
export {};
