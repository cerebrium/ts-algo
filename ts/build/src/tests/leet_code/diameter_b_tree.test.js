"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diameter_b_tree_1 = require("../../questions/leet_code/diameter_b_tree");
test('diameter', () => {
    const nodeOne = new diameter_b_tree_1.TreeNode(0);
    const nodeTwo = new diameter_b_tree_1.TreeNode(1);
    const nodeThree = new diameter_b_tree_1.TreeNode(2);
    const nodeFour = new diameter_b_tree_1.TreeNode(3);
    nodeOne.left = nodeTwo;
    nodeOne.right = nodeThree;
    nodeThree.right = nodeFour;
    const res = (0, diameter_b_tree_1.diameterOfBinaryTree)(nodeOne);
    expect(res).toBe(3);
});
//# sourceMappingURL=diameter_b_tree.test.js.map