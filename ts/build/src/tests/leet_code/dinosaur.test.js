"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dinosaur_1 = require("../../questions/leet_code/dinosaur");
test('dinosaur', async () => {
    const res = await (0, dinosaur_1.dino)();
    expect(res.length).toEqual(3);
    const order = ['Struthiomimus', 'Hadrosaurus', 'Tyrannosaurus Rex'];
    for (let i = 0; i < order.length; i++) {
        expect(res[i]).toEqual(order[i]);
    }
});
//# sourceMappingURL=dinosaur.test.js.map