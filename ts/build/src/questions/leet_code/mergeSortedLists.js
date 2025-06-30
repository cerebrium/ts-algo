"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSortedList = void 0;
function mergeSortedList(nums1, m, nums2, n) {
    if (!n) {
        nums1.splice(m, nums1.length - m);
        return;
    }
    const mergedArray = [];
    let point1 = 0;
    let point2 = 0;
    while (point1 <= m || point2 <= n) {
        if (point1 >= m) {
            let local2 = point2;
            while (local2 < n) {
                mergedArray.push(nums2[local2]);
                local2++;
            }
            break;
        }
        if (nums1[point1] < nums2[point2]) {
            mergedArray.push(nums1[point1]);
            point1++;
            continue;
        }
        if (nums1[point1] > nums2[point2]) {
            mergedArray.push(nums2[point2]);
            point2++;
            continue;
        }
        if (point2 >= n) {
            for (let i = point1; i < m; i++) {
                mergedArray.push(nums1[i]);
            }
            break;
        }
        mergedArray.push(nums1[point1], nums2[point2]);
        point1++;
        point2++;
    }
    for (let i = 0; i < mergedArray.length; i++) {
        if (i > nums1.length) {
            nums1.push(mergedArray[i]);
            continue;
        }
        nums1[i] = mergedArray[i];
    }
}
exports.mergeSortedList = mergeSortedList;
//# sourceMappingURL=mergeSortedLists.js.map