import {TreeNode, rangeSumBST} from '../../questions/leet_code/range_sum_bst';

function makeTreeNodes(nums: Array<number | null>) {
  let currLength = 1;
  let idx = 0;
  const rows = [];

  // Split the b tree up by rows
  while (idx < nums.length) {
    let localArr = [];
    for (let i = idx; i < currLength + idx; i++) {
      if (i > nums.length - 1) {
        break;
      }

      localArr.push(nums[i]);
    }

    idx = idx + currLength;
    currLength *= 2;

    rows.push(localArr);
  }

  const nodeRows: TreeNode[][] = [];

  for (let x = 0; x < rows.length; x++) {
    const row = rows[x];
    const localNodeRow: TreeNode[] = [];
    for (let i = 0; i < row.length; i++) {
      if (row[i] === null) {
        continue;
      }

      const newNode = new TreeNode(row[i]!);

      if (x === 0) {
        localNodeRow.push(newNode);
        break;
      }

      // We want to link the parent to the children
      const parentIdx = Math.floor(i / 2);
      const isRight = !!(i % 2);
      const parent = nodeRows[x - 1][parentIdx];

      if (!isRight) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }

      localNodeRow.push(newNode);
    }

    nodeRows.push(localNodeRow);
  }

  const root = nodeRows[0][0] ? nodeRows[0][0] : null;
  if (!root) {
    throw new Error('No root, makeTreeNodes is broken');
  }

  return root;
}
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
test('range_sum_bst', () => {
  const root = makeTreeNodes([10, 5, 15, 3, 7, null, 18]);
  const low = 7;
  const high = 15;

  const res = rangeSumBST(root, low, high);
  const output = 32;

  expect(res).toEqual(output);
});

// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
test('range_sum_bst', () => {
  const root = makeTreeNodes([10, 5, 15, 3, 7, 13, 18, 1, null, 6]);
  const low = 6;
  const high = 10;

  const res = rangeSumBST(root, low, high);
  const output = 23;

  expect(res).toEqual(output);
});
