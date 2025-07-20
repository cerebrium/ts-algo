import {findSignatureCounts} from '../../questions/leet_code/passingYearbooks';

test('passing_yearbooks', () => {
  const n = 2;
  const arr = [2, 1];
  const output = [2, 2];

  const res = findSignatureCounts(arr);

  for (let i = 0; i < output.length; i++) {
    expect(output[i]).toEqual(res[i]);
  }
});

// test('passing_yearbooks', () => {
//   const n = 2;
//   const arr = [1, 2];
//   const output = [1, 1];
//
//   const res = findSignatureCounts(arr);
//
//   for (let i = 0; i < output.length; i++) {
//     expect(output[i]).toEqual(res[i]);
//   }
// });
