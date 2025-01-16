import { BNode } from '.';
export declare enum BfsType {
    'POST' = "post",
    'PRE' = "pre",
    'IN' = "in"
}
export declare function dfs_rec(node: BNode<number> | undefined, kind: BfsType): Array<number>;
