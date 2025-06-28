"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simplify_path_1 = require("../../questions/leet_code/simplify_path");
// Explanation:
// The trailing slash should be removed.
test('simplifyPath', () => {
    const path = '/home/';
    const output = '/home';
    expect((0, simplify_path_1.simplifyPath)(path)).toEqual(output);
});
// Explanation:
// Multiple consecutive slashes are replaced by a single one.
test('simplifyPath', () => {
    const path = '/home//foo/';
    const output = '/home/foo';
    expect((0, simplify_path_1.simplifyPath)(path)).toEqual(output);
});
// Explanation:
// A double period ".." refers to the directory up a level (the parent directory).
test('simplifyPath', () => {
    const path = '/home/user/Documents/../Pictures';
    const output = '/home/user/Pictures';
    expect((0, simplify_path_1.simplifyPath)(path)).toEqual(output);
});
// Explanation:
// Going one level up from the root directory is not possible.
test('simplifyPath', () => {
    const path = '/../';
    const output = '/';
    expect((0, simplify_path_1.simplifyPath)(path)).toEqual(output);
});
// Explanation:
// "..." is a valid name for a directory in this problem.
test('simplifyPath', () => {
    const path = '/.../a/../b/c/../d/./';
    const output = '/.../b/d';
    expect((0, simplify_path_1.simplifyPath)(path)).toEqual(output);
});
test('simplifyPath', () => {
    const path = '/a/./b/../../c/';
    const output = '/c';
    expect((0, simplify_path_1.simplifyPath)(path)).toEqual(output);
});
//# sourceMappingURL=simplify_path.test.js.map