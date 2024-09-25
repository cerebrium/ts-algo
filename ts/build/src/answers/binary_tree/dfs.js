"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dfs = void 0;
function dfs(node, target) {
    if (!node) {
        return false;
    }
    const iterate = (node) => {
        if (!node) {
            return false;
        }
        if ((node === null || node === void 0 ? void 0 : node.val) === target) {
            return true;
        }
        const is_left = iterate(node.left);
        if (is_left) {
            return true;
        }
        const is_right = iterate(node.right);
        if (is_right) {
            return true;
        }
        return false;
    };
    return iterate(node);
}
exports.dfs = dfs;
//# sourceMappingURL=dfs.js.map