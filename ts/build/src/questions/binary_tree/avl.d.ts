import { BNode } from '.';
declare class AVL<T> {
    root: null | BNode<T>;
    constructor();
    private ll_shift;
    private rr_shift;
    private lr_shift;
    private rl_shift;
    private balance;
}
export declare const avl: AVL<unknown>;
export {};
