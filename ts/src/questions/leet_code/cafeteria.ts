// // A cafeteria table consists of a row of
// A cafeteria table consists of a row of seats, numbered from to from left to right.
// Social distancing guidelines require that every diner be seated such that seats to
// their left and seats to their right (or all the remaining seats to that side if
// there are fewer than ) remain empty.
// N 1 N K
// K K
// There are currently M diners seated at the table, the ith of whom is in seat Si.
// No two diners are sitting in the same seat, and the social distancing guidelines are satised.
// Determine the maximum number of additional diners who can potentially sit at the
// table without social distancing guidelines being violated for any new or existing diners,
// assuming that the existing diners cannot move and that the additional diners
// will cooperate to maximize how many of them can sit down.
// Please take care to write a solution which runs within the time limit.
// Constraints
// 1 ≤ N ≤ 10
// 15
// 1 ≤ K ≤ N
// 1 ≤ M ≤ 500,000
// M ≤ N
// 1 ≤ Si ≤ N
// Sample Explanation
// In the rst case, the cafeteria table has seats, with two diners currently at seats and respectively.
// The table initially looks as follows, with brackets covering the
//  seat to the left and right of each existing diner that may not be taken.
// N = 10 2 6
// K = 1
//  1 2 3 4 5 6 7 8 9 10
//  [ ] [ ]
// Three additional diners may sit at seats 4, 8, and 10 without violating the social distancing guidelines.
// In the second case, only 1 additional diner is able to join the table, by sitting in any of the rst 3 seats.

export function getMaxAdditionalDinersCount(
  N: number, // Total number of seats
  K: number, // Distance required between diners
  M: number, // Current amount of diners
  S: number[] // Currently sitting spots
): number {
  const freeRanges: number[][] = [];
  let totalExtraDiners = 0;

  let currMin = 1;
  let currMax = 1;

  // Walk through the ranges that aren't available, combine in place... They are
  // sorted. The min will point at the start of the unavailable range, the max will
  // point at the end of the unavailable range. If there is space between the current
  // point - K and the max, then we have a range that is accessible.
  //
  for (let i = 0; i < S.sort((a, b) => a - b).length; i++) {
    if (S[i] - K > currMax + 1) {
      freeRanges.push([currMax + 1, S[i] - K - 1]);
    }

    currMin = Math.min(S[i] - K, currMin);
    currMax = Math.max(S[i] + K, currMax);
  }

  return M + totalExtraDiners;
}
