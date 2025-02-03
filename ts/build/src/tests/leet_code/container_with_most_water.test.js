"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_with_most_water_1 = require("../../questions/leet_code/container_with_most_water");
test('container_most_water', () => {
    let answer = (0, container_with_most_water_1.maxArea)([1, 8, 6, 2, 5, 4, 8, 3, 7]);
    expect(answer).toBe(49);
    answer = (0, container_with_most_water_1.maxArea)([1, 1]);
    expect(answer).toBe(1);
});
//# sourceMappingURL=container_with_most_water.test.js.map