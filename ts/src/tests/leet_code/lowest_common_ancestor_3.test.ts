import {
  _Node,
  lowestCommonAncestorThree,
} from '../../questions/leet_code/lowest_common_ancestor_3';

function makeTree(nums: Array<number | null>, p: number, q: number) {
  let currLength = 1;
  let idx = 0;
  const rows = [];
  let qNode = null;
  let pNode = null;

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

  const nodeRows: _Node[][] = [];

  for (let x = 0; x < rows.length; x++) {
    const row = rows[x];
    const localNodeRow: _Node[] = [];
    for (let i = 0; i < row.length; i++) {
      if (row[i] === null) {
        continue;
      }

      const newNode = new _Node(row[i]!);

      if (row[i] === p) {
        pNode = newNode;
      }

      if (row[i] === q) {
        qNode = newNode;
      }

      if (x === 0) {
        localNodeRow.push(newNode);
        break;
      }

      // We want to link the parent to the children
      const parentIdx = Math.floor(i / 2);
      const isRight = !!(i % 2);
      const parent = nodeRows[x - 1][parentIdx];
      newNode.parent = parent;

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
    throw new Error('No root, make_Nodes is broken');
  }

  return [root, pNode, qNode];
}

// Explanation: The LCA of nodes 5 and 1 is 3.
test('lowest_common_ancestor_3', () => {
  const nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
  const pVal = 5;
  const qVal = 1;
  const [_, p, q] = makeTree(nums, pVal, qVal);

  const ancestor = lowestCommonAncestorThree(p, q);
  expect(ancestor).toBeTruthy();
  if (ancestor) {
    expect(ancestor.val).toBe(3);
  }
});

// Explanation: The LCA of nodes 5 and 4 is 5 since a node can be a descendant of itself according to the LCA definition.
test('lowest_common_ancestor_3', () => {
  const nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
  const pVal = 5;
  const qVal = 4;
  const [_, p, q] = makeTree(nums, pVal, qVal);

  const ancestor = lowestCommonAncestorThree(p, q);
  expect(ancestor).toBeTruthy();
  if (ancestor) {
    expect(ancestor.val).toBe(5);
  }
});

// Input: root = [1,2], p = 1, q = 2
test('lowest_common_ancestor_3', () => {
  const nums = [1, 2];
  const pVal = 1;
  const qVal = 2;
  const [_, p, q] = makeTree(nums, pVal, qVal);

  const ancestor = lowestCommonAncestorThree(p, q);
  expect(ancestor).toBeTruthy();
  if (ancestor) {
    expect(ancestor.val).toBe(1);
  }
});

test('lowest_common_ancestor_3', () => {
  const nums = [1, 2];
  const pVal = 2;
  const qVal = 1;
  const [_, p, q] = makeTree(nums, pVal, qVal);

  const ancestor = lowestCommonAncestorThree(p, q);
  expect(ancestor).toBeTruthy();
  if (ancestor) {
    expect(ancestor.val).toBe(1);
  }
});

test('lowest_common_ancestor_3', () => {
  const nums = [-1, 0, 3, -2, 4, null, null, 8];
  const pVal = 8;
  const qVal = 4;
  const [_, p, q] = makeTree(nums, pVal, qVal);

  const ancestor = lowestCommonAncestorThree(p, q);
  expect(ancestor).toBeTruthy();
  if (ancestor) {
    expect(ancestor.val).toBe(0);
  }
});
