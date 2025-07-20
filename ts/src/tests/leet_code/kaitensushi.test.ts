// There are N dishes in a row on a kaiten belt, with the ith dish being of type D . Some dishes may be of the same type as one another. i
// You're very hungry, but you'd also like to keep things interesting. The dishes will arrive in front of you, one after another in order, and for each one you'll eat it as long as it
// isn't the same type as any of the previous dishes you've eaten. You eat very fast, so you can consume a dish before the next one gets to you. Any dishes you choose not
// to eat as they pass will be eaten by others.
// N
// K
// Determine how many dishes you'll end up eating.
// Please take care to write a solution which runs within the time limit.
// Constraints
// 1 ≤ N ≤ 500,000
// 1 ≤ K ≤ N
// 1 ≤ Di ≤ 1,000,000
// Sample Explanation
// In the rst case, the dishes have types of [1, 2, 3, 3, 2, 1], so you'll eat the rst 3 dishes, skip the next one as it's another type-3 dish, and then eat the last 2.
// In the second case, you won't eat a dish if it has the same type as either of the previous dishes you've eaten. After eating the rst, second, and third dishes, you'll skip the
// fourth and fth dishes as they're each the same type as one of the last dishes that you've eaten. You'll then eat the last dish, consuming dishes total.
// 2
// 2 4

import {getMaximumEatenDishCount} from '../../questions/leet_code/kaitensushi';

test('kaitensushi', () => {
  const n: number = 6;
  const d: number[] = [1, 2, 3, 3, 2, 1];
  const k: number = 1;

  const maxDishes = getMaximumEatenDishCount(n, d, k);
  expect(maxDishes).toBe(5);
});

test('kaitensushi', () => {
  const n: number = 6;
  const d: number[] = [1, 2, 3, 3, 2, 1];
  const k: number = 2;

  const maxDishes = getMaximumEatenDishCount(n, d, k);
  expect(maxDishes).toBe(4);
});

test('kaitensushi', () => {
  const n: number = 7;
  const d: number[] = [1, 2, 1, 2, 1, 2, 1];
  const k: number = 2;

  const maxDishes = getMaximumEatenDishCount(n, d, k);
  expect(maxDishes).toBe(2);
});
