export declare class _Node {
    val: number;
    left: _Node | null;
    right: _Node | null;
    parent: _Node | null;
    constructor(v: number);
}
export declare function lowestCommonAncestorThree(p: _Node | null, q: _Node | null): _Node | null;
