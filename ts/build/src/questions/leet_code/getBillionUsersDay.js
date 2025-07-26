"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBillionUsersDay = void 0;
function getBillionUsersDay(growthRates) {
    let day = 0;
    const aBillion = 1000000000;
    if (growthRates.length === 1) {
        return Math.floor(Math.log(aBillion) / Math.log(growthRates[0]) + 1);
    }
    let min = 1;
    let max = Math.floor(Math.log(aBillion) / Math.log(Math.max(...growthRates)) + 1);
    while (min < max) {
        const mid = Math.floor((max - min) / 2 + min);
        const [curVal, tomVal] = getSums(growthRates, mid);
        if (tomVal > aBillion && curVal < aBillion) {
            return mid + 1;
        }
        if (curVal < aBillion) {
            min = mid + 1;
            continue;
        }
        max = mid;
    }
    return day;
}
exports.getBillionUsersDay = getBillionUsersDay;
function getSums(gRates, day) {
    let sum = 0;
    let sumTomorrow = 0;
    for (let i = 0; i < gRates.length; i++) {
        sum += Math.pow(gRates[i], day);
        sumTomorrow += Math.pow(gRates[i], day + 1);
    }
    return [sum, sumTomorrow];
}
//# sourceMappingURL=getBillionUsersDay.js.map