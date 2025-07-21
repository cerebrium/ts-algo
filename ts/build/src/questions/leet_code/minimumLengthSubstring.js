"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minLengthSubstring = void 0;
// Minimum Length Substrings
// You are given two strings s and t. You can select any substring of string s and rearrange the characters of the selected substring.
// Determine the minimum length of the substring of s such that string t is a substring of the selected substring.
// Signature
// int minLengthSubstring(String s, String t)
// Input
// s and t are non-empty strings that contain less than 1,000,000 characters each
// Output
// Return the minimum length of the substring of s. If it is not possible, return -1
function minLengthSubstring(s, t) {
    if (t.length > s.length) {
        return -1;
    }
    const sLetCount = new Map();
    const tLetCount = new Map();
    for (let i = 0; i < s.length; i++) {
        const sLookup = sLetCount.get(s[i]);
        if (!sLookup) {
            sLetCount.set(s[i], 1);
            continue;
        }
        sLetCount.set(s[i], sLookup + 1);
    }
    for (let i = 0; i < t.length; i++) {
        const tLookup = tLetCount.get(t[i]);
        if (!tLookup) {
            tLetCount.set(t[i], 1);
            continue;
        }
        tLetCount.set(t[i], tLookup + 1);
    }
    let notEligible = false;
    tLetCount.forEach((v, k) => {
        if (notEligible) {
            return;
        }
        const sLookup = sLetCount.get(k);
        if (!sLookup || sLookup < v) {
            notEligible = true;
            return;
        }
    });
    if (notEligible) {
        return -1;
    }
    /*
     *
     create two pointer
        1. 0 & end
        2. increment starting pointer if
            - not a letter thats included
            - letter is accounted for elsewhere
        3. decrement end pointer if
            - not a letter thats included
            - letter is accounted for elsewhere
     *
     */
    let start = 0;
    let minSubArray = s.length;
    let hasAll = 0;
    const currentWindowCount = new Map();
    for (let end = 0; end < s.length; end++) {
        const endLetter = s[end];
        const needEndLetter = tLetCount.get(endLetter);
        const currLetterCount = currentWindowCount.get(endLetter);
        if (needEndLetter) {
            if (!currLetterCount) {
                currentWindowCount.set(endLetter, 1);
            }
            else {
                currentWindowCount.set(endLetter, currLetterCount + 1);
            }
            hasAll++;
        }
        console.log('hasAll: ', hasAll, '\tt.length: ', t.length, '\nstart: ', start, '\tend: ', end);
        while (hasAll >= t.length) {
            const tStartCount = tLetCount.get(s[start]);
            if (!tStartCount) {
                start++;
                continue;
            }
            const currStartLetter = currentWindowCount.get(s[start]);
            if (!currStartLetter) {
                throw new Error('no currStartLetter in while');
            }
            if (currStartLetter > tStartCount) {
                start++;
                currentWindowCount.set(s[start], currStartLetter - 1);
                continue;
            }
            minSubArray = Math.min(minSubArray, end - start + 1);
            break;
        }
    }
    return minSubArray;
}
exports.minLengthSubstring = minLengthSubstring;
//# sourceMappingURL=minimumLengthSubstring.js.map