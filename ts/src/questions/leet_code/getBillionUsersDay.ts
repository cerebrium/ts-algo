/*
1 Billion Users
We have N different apps with different user growth rates.
At a given time t, measured in days, the number of users 
using an app is g^t (for simplicity we'll allow fractional users),
where g is the growth rate for that app. These apps will all be
launched at the same time and no user ever uses more than one of 
the apps. 
We want to know how many total users there are when you add together
the number of users from each app.

After how many full days will we have 1 billion total users across the N apps?
Signature
int getBillionUsersDay(float[] growthRates)

*/

export function getBillionUsersDay(growthRates: number[]): number {
  let min: number = 1;
  let max: number = Math.ceil(
    Math.log(1000000000) / Math.log(Math.max(...growthRates))
  );
  const ABillion = 1000000000;

  const preComputed: Map<number, number> = new Map(); // time -> users

  while (min < max) {
    const mid = Math.floor((max - min) / 2 + min);
    let users = preComputed.get(mid);

    if (!users) {
      users = sumUsers(growthRates, mid);
      preComputed.set(mid, users);
    }

    if (users < ABillion) {
      let aboveUsers = preComputed.get(mid + 1);

      if (!aboveUsers) {
        aboveUsers = sumUsers(growthRates, mid + 1);
      }

      if (aboveUsers > ABillion) {
        return mid + 1;
      }

      preComputed.set(mid + 1, aboveUsers);
      min = mid + 1;
      continue;
    }

    let belowUsers = preComputed.get(mid - 1);

    if (!belowUsers) {
      belowUsers = sumUsers(growthRates, mid - 1);
    }

    if (belowUsers < ABillion) {
      return mid;
    }

    preComputed.set(mid - 1, belowUsers);
    max = mid;
  }

  // Should never be reached
  return 0;
}

function sumUsers(growthRates: number[], time: number): number {
  let sum = 0;

  for (let i = 0; i < growthRates.length; i++) {
    sum += Math.pow(growthRates[i], time);
  }

  return sum;
}
