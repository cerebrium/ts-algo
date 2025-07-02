export declare class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null);
}
export declare function rangeSumBST(root: TreeNode | null, low: number, high: number): number;
