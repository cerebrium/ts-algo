"use strict";
// Given two strings s and t of length N, find the maximum number of possible matching pairs in strings
// s and t after swapping exactly two characters within s.
// A swap is switching s[i] and s[j], where s[i] and s[j] denotes the character that is present at the
// ith and jth index of s, respectively. The matching pairs of the two strings are defined as the number
// of indices for which s[i] and t[i] are equal.
// Note: This means you must swap two characters at different indices.
// - Map<string, Map<string, number>>
// - [
//     [has (c), looking-for (p)]
//   ]
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchingPairs = void 0;
function matchingPairs(s, t) {
    let pairs = 0;
    const lookupMap = new Map(); // <has, Map<looking-for, number>>
    const availableMatches = []; // [has, looking-for]
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[i]) {
            pairs++;
            continue;
        }
        availableMatches.push([s[i], t[i]]);
        const hasLookup = lookupMap.get(s[i]);
        if (!hasLookup) {
            const lookingForMap = new Map();
            lookingForMap.set(t[i], 1);
            lookupMap.set(s[i], lookingForMap);
            continue;
        }
        const hasMatchingLookup = hasLookup.get(t[i]);
        if (!hasMatchingLookup) {
            hasLookup.set(t[i], 1);
            continue;
        }
        hasLookup.set(t[i], hasMatchingLookup + 1);
    }
    if (pairs === s.length) {
        return s.length - 2;
    }
    if (pairs === s.length - 1) {
        for (const [has, lookingFor] of availableMatches) {
            const lookingForMap = lookupMap.get(lookingFor);
            if (!lookingForMap) {
                continue;
            }
            const hasLookingFor = lookingForMap.get(has);
            if (!hasLookingFor) {
                continue;
            }
            return pairs + 1;
        }
    }
    let additions = 0;
    for (const [has, lookingFor] of availableMatches) {
        if (additions === 2) {
            return pairs;
        }
        const lookingForMap = lookupMap.get(lookingFor);
        if (!lookingForMap) {
            continue;
        }
        const hasLookingFor = lookingForMap.get(has);
        if (!hasLookingFor) {
            continue;
        }
        if (hasLookingFor > 1) {
            lookingForMap.set(has, hasLookingFor - 1);
            continue;
        }
        lookingForMap.delete(has);
        pairs++;
        additions++;
    }
    return pairs;
}
exports.matchingPairs = matchingPairs;
//# sourceMappingURL=matchingPairs.js.map