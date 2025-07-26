import {numberOfWays} from '../../questions/leet_code/pairSums';

test('pair sums', () => {
  const n = 5;
  const k = 6;
  const arr = [1, 2, 3, 4, 3];
  const output = 2;
  const res = numberOfWays(arr, k);
  expect(res).toEqual(output);
});

test('pair sums', () => {
  const n = 5;
  const k = 6;
  const arr = [1, 5, 3, 3, 3];
  const output = 4;
  const res = numberOfWays(arr, k);
  expect(res).toEqual(output);
});
