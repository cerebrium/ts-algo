"use strict";
// Given two sparse vectors, compute their dot product.
//
// Implement class SparseVector:
//
// SparseVector(nums) Initializes the object with the vector nums
// dotProduct(vec) Compute the dot product between the instance of SparseVector and vec
// A sparse vector is a vector that has mostly zero values, you should store the sparse vector efficiently and compute the dot product between two SparseVector.
Object.defineProperty(exports, "__esModule", { value: true });
const dot_product_1 = require("../../questions/leet_code/dot_product");
// Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
// v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8
test('dot_product', () => {
    const vecOne = new dot_product_1.SparseVector([1, 0, 0, 2, 3]);
    const vecTwo = new dot_product_1.SparseVector([0, 3, 0, 4, 0]);
    const res = vecOne.dotProduct(vecTwo);
    expect(res).toBe(8);
});
// Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
// v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0
test('dot_product', () => {
    const vecOne = new dot_product_1.SparseVector([0, 1, 0, 0, 0]);
    const vecTwo = new dot_product_1.SparseVector([0, 0, 0, 0, 2]);
    const res = vecOne.dotProduct(vecTwo);
    expect(res).toBe(0);
});
test('dot_product', () => {
    const vecOne = new dot_product_1.SparseVector([0, 1, 0, 0, 2, 0, 0]);
    const vecTwo = new dot_product_1.SparseVector([1, 0, 0, 0, 3, 0, 4]);
    const res = vecOne.dotProduct(vecTwo);
    expect(res).toBe(6);
});
//# sourceMappingURL=dot_product.test.js.map