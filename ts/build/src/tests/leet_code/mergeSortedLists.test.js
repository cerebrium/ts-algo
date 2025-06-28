"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeSortedLists_1 = require("../../questions/leet_code/mergeSortedLists");
test('mergeSortedList', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    const output = [1, 2, 2, 3, 5, 6];
    (0, mergeSortedLists_1.mergeSortedList)(nums1, m, nums2, n);
    expect(output.length).toEqual(nums1.length);
    for (let i = 0; i < output.length; i++) {
        expect(output[i]).toEqual(nums1[i]);
    }
});
test('mergeSortedList', () => {
    const nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0;
    const output = [1];
    (0, mergeSortedLists_1.mergeSortedList)(nums1, m, nums2, n);
    expect(output.length).toEqual(nums1.length);
    for (let i = 0; i < output.length; i++) {
        expect(output[i]).toEqual(nums1[i]);
    }
});
test('mergeSortedList', () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;
    const output = [1];
    (0, mergeSortedLists_1.mergeSortedList)(nums1, m, nums2, n);
    expect(output.length).toEqual(nums1.length);
    for (let i = 0; i < output.length; i++) {
        expect(output[i]).toEqual(nums1[i]);
    }
});
test('mergeSortedList', () => {
    const nums1 = [1, 0];
    const m = 1;
    const nums2 = [2];
    const n = 1;
    const output = [1, 2];
    (0, mergeSortedLists_1.mergeSortedList)(nums1, m, nums2, n);
    expect(output.length).toEqual(nums1.length);
    for (let i = 0; i < output.length; i++) {
        expect(output[i]).toEqual(nums1[i]);
    }
});
test('mergeSortedList', () => {
    const nums1 = [2, 0];
    const m = 1;
    const nums2 = [1];
    const n = 1;
    const output = [1, 2];
    (0, mergeSortedLists_1.mergeSortedList)(nums1, m, nums2, n);
    expect(output.length).toEqual(nums1.length);
    for (let i = 0; i < output.length; i++) {
        expect(output[i]).toEqual(nums1[i]);
    }
});
test('mergeSortedList', () => {
    const nums1 = [4, 0, 0, 0, 0, 0];
    const m = 1;
    const nums2 = [1, 2, 3, 5, 6];
    const n = 5;
    const output = [1, 2, 3, 4, 5, 6];
    (0, mergeSortedLists_1.mergeSortedList)(nums1, m, nums2, n);
    expect(output.length).toEqual(nums1.length);
    for (let i = 0; i < output.length; i++) {
        expect(output[i]).toEqual(nums1[i]);
    }
});
//# sourceMappingURL=mergeSortedLists.test.js.map