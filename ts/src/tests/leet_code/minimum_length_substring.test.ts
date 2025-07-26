import {minLengthSubstring} from '../../questions/leet_code/minimumLengthSubstring';

test('minimum length substring', () => {
  const s = 'dcbefebce';
  const t = 'fd';
  const output = 5;

  const res = minLengthSubstring(s, t);

  expect(res).toEqual(output);
});

test('minimum length substring', () => {
  const s = 'bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf';
  const t = 'cbccfafebccdccebdd';
  const output = -1;

  const res = minLengthSubstring(s, t);

  expect(res).toEqual(output);
});
