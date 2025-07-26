"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotationalCipher_1 = require("../../questions/leet_code/rotationalCipher");
test('rotational cipher', () => {
    const input = 'Zebra-493';
    const rotationFactor = 3;
    const output = 'Cheud-726';
    const res = (0, rotationalCipher_1.rotationalCipher)(input, rotationFactor);
    console.log('what is the res: ', res);
    for (let i = 0; i < res.length; i++) {
        expect(res[i]).toBe(output[i]);
    }
});
test('rotational cipher', () => {
    const input = 'abcdefghijklmNOPQRSTUVWXYZ0123456789';
    const rotationFactor = 39;
    const output = 'nopqrstuvwxyzABCDEFGHIJKLM9012345678';
    const res = (0, rotationalCipher_1.rotationalCipher)(input, rotationFactor);
    for (let i = 0; i < res.length; i++) {
        expect(res[i]).toBe(output[i]);
    }
});
//# sourceMappingURL=rotational_cipher.test.js.map