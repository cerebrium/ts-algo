import { BNode } from '.';
export declare enum BfsType {
    'POST' = "post",
    'PRE' = "pre",
    'IN' = "in"
}
export declare function bfs_rec(node: BNode | undefined, kind: BfsType): Array<number>;
