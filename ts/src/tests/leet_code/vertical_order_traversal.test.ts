import {
  TreeNode,
  verticalOrder,
} from '../../questions/leet_code/vertical_order_traversal_tree';

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

// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
// If two nodes are in the same row and column, the order should be from left to right.
// test('vertical_order_traversal_tree', () => {
//   const root = makeTreeNodes([3, 9, 20, null, null, 15, 7]);
//   const expectedOutput = [[9], [3, 15], [20], [7]];
//   const verticalTraversal = verticalOrder(root);
//
//   console.log('verticalTraversal: ', verticalTraversal);
//
//   expect(verticalTraversal.length).toEqual(expectedOutput.length);
//   if (verticalTraversal.length !== expectedOutput.length) {
//     return;
//   }
//
//   for (let x = 0; x < verticalTraversal.length; x++) {
//     const expectedSubarray = expectedOutput[x];
//     const givenSubarray = verticalTraversal[x];
//
//     expect(expectedSubarray.length).toEqual(givenSubarray.length);
//
//     if (expectedSubarray.length !== givenSubarray.length) {
//       return;
//     }
//
//     for (let i = 0; i < givenSubarray.length; i++) {
//       expect(givenSubarray[i]).toEqual(expectedSubarray[i]);
//     }
//   }
// });
//
// test('vertical_order_traversal_tree', () => {
//   const root = makeTreeNodes([3, 9, 8, 4, 0, 1, 7]);
//   const expectedOutput = [[4], [9], [3, 0, 1], [8], [7]];
//   const verticalTraversal = verticalOrder(root);
//
//   expect(verticalTraversal.length).toEqual(expectedOutput.length);
//   if (verticalTraversal.length !== expectedOutput.length) {
//     return;
//   }
//
//   for (let x = 0; x < verticalTraversal.length; x++) {
//     const expectedSubarray = expectedOutput[x];
//     const givenSubarray = verticalTraversal[x];
//
//     expect(expectedSubarray.length).toEqual(givenSubarray.length);
//
//     if (expectedSubarray.length !== givenSubarray.length) {
//       return;
//     }
//
//     for (let i = 0; i < givenSubarray.length; i++) {
//       expect(givenSubarray[i]).toEqual(expectedSubarray[i]);
//     }
//   }
// });

test('vertical_order_traversal_tree', () => {
  const root = makeTreeNodes([
    1,
    2,
    3,
    4,
    10,
    9,
    11,
    null,
    5,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    6,
  ]);

  const expectedOutput = [[4], [2, 5], [1, 10, 9, 6], [3], [11]];
  const verticalTraversal = verticalOrder(root);

  console.log('verticalTraversal: ', verticalTraversal);
  console.log('expected: ', expectedOutput);

  expect(verticalTraversal.length).toEqual(expectedOutput.length);
  if (verticalTraversal.length !== expectedOutput.length) {
    return;
  }

  for (let x = 0; x < verticalTraversal.length; x++) {
    const expectedSubarray = expectedOutput[x];
    const givenSubarray = verticalTraversal[x];

    expect(expectedSubarray.length).toEqual(givenSubarray.length);

    if (expectedSubarray.length !== givenSubarray.length) {
      return;
    }

    for (let i = 0; i < givenSubarray.length; i++) {
      expect(givenSubarray[i]).toEqual(expectedSubarray[i]);
    }
  }
});
