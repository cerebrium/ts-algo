"use strict";
/*
    Example 1:

    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"
    Example 2:

    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I
    Example 3:

    Input: s = "A", numRows = 1
    Output: "A"
    

    Constraints:

    1 <= s.length <= 1000
    s consists of English letters (lower-case and upper-case), ',' and '.'.
    1 <= numRows <= 1000
*/
Object.defineProperty(exports, "__esModule", { value: true });
const zig_zag_conversion_1 = require("../../questions/leet_code/zig_zag_conversion");
test('zig_zag', () => {
    // let answer = convert('PAYPALISHIRING', 3);
    // expect(answer).toEqual('PAHNAPLSIIGYIR');
    //
    // console.log('after one');
    let answer = (0, zig_zag_conversion_1.convert)('PAYPALISHIRING', 4);
    expect(answer).toEqual('PINALSIGYAHRPI');
    console.log('after two');
    answer = (0, zig_zag_conversion_1.convert)('A', 1);
    expect(answer).toEqual('A');
    answer = (0, zig_zag_conversion_1.convert)('AB', 1);
    expect(answer).toEqual('AB');
    answer = (0, zig_zag_conversion_1.convert)('ABCD', 2);
    expect(answer).toEqual('ACBD');
});
//# sourceMappingURL=zig_zag_conversion.test.js.map