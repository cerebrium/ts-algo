import {quicksort} from '../../questions/sorts/quicksort';

test('quicksort', () => {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let idx = quicksort(data, 8);
  expect(idx).toBe(8);

  idx = quicksort(data, 2);
  expect(idx).toBe(2);

  idx = quicksort(data, 0);
  expect(idx).toBe(0);

  idx = quicksort(data, 10);
  expect(idx).toBe(10);

  expect(data).toBe(data);
});
