import { BNode } from '.';
export declare function add_node<T>(node: BNode<T> | undefined, val: T, prev_node: BNode<T>): void;
export declare function delete_node<T>(node: BNode<T> | undefined, val: T, prev_node: BNode<T>): void;
