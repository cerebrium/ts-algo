// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k,
// return the k closest points to the origin (0, 0).
//
// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
//
// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
//
//
//
// Example 1:
//
//
// Example 2:
//
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.

import {kClosest} from '../../questions/leet_code/k_closest_point_to_origin';

// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// test('k_closest_point_to_origin', () => {
//   const points = [
//     [1, 3],
//     [-2, 2],
//   ];
//   const k = 1;
//   const res = kClosest(points, k);
//
//   const output = [[-2, 2]];
//
//   expect(output.length).toEqual(res.length);
//
//   if (output.length !== res.length) {
//     return;
//   }
//
//   for (let i = 0; i < output.length; i++) {
//     const valsOutput = output[i];
//     const valsRes = res[i];
//
//     for (let x = 0; x < valsOutput.length; x++) {
//       expect(valsRes[x]).toEqual(valsOutput[x]);
//     }
//   }
// });
//
// test('k_closest_point_to_origin', () => {
//   const points = [
//     [3, 3],
//     [5, -1],
//     [-2, 4],
//   ];
//   const k = 2;
//   const res = kClosest(points, k);
//
//   const output = [
//     [3, 3],
//     [-2, 4],
//   ];
//
//   if (output.length !== res.length) {
//     return;
//   }
//
//   for (let i = 0; i < output.length; i++) {
//     const valsOutput = output[i];
//     const valsRes = res[i];
//
//     for (let x = 0; x < valsOutput.length; x++) {
//       expect(valsRes[x]).toEqual(valsOutput[x]);
//     }
//   }
// });

test('k_closest_point_to_origin', () => {
  const points = [
    [-2, 10],
    [-4, -8],
    [10, 7],
    [-4, -7],
  ];

  const k = 3;
  const res = kClosest(points, k);

  const output = [
    [-4, -7],
    [-4, -8],
    [-2, 10],
  ];

  console.log('res: ', res, '\nexpected: ', output);

  if (output.length !== res.length) {
    return;
  }

  for (let i = 0; i < output.length; i++) {
    const valsOutput = output[i];
    const valsRes = res[i];

    for (let x = 0; x < valsOutput.length; x++) {
      expect(valsRes[x]).toEqual(valsOutput[x]);
    }
  }
});
