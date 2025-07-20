import {canBeEqual} from '../../questions/leet_code/reverseMakeEqual';

test('reversMakeEqual', () => {
  const A = [1, 2, 3, 4];
  const B = [1, 4, 3, 2];

  const res = canBeEqual(A, B);
  expect(res).toBeTruthy();
});

test('reversMakeEqual', () => {
  const A = [7];
  const B = [7];

  const res = canBeEqual(A, B);
  expect(res).toBeTruthy();
});

test('reversMakeEqual', () => {
  const A = [3, 7, 9];
  const B = [3, 7, 11];

  const res = canBeEqual(A, B);
  expect(res).toBeFalsy();
});

test('reversMakeEqual', () => {
  const A = [1, 2, 2, 3];
  const B = [1, 1, 2, 3];

  const res = canBeEqual(A, B);
  expect(res).toBeFalsy();
});
