interface BNode {
    val: number;
    left?: BNode;
    right?: BNode;
}
export declare function dfs(node: BNode, target: number): boolean;
export {};
