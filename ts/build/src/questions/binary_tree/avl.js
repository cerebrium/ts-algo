"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avl = void 0;
class AVL {
    constructor() {
        this.root = null;
    }
    ll_shift(node) {
        if (!node) {
            return;
        }
    }
    rr_shift(node) {
        if (!node) {
            return;
        }
    }
    lr_shift(node) {
        if (!node) {
            return;
        }
    }
    rl_shift(node) {
        if (!node) {
            return;
        }
    }
    // We will do a depth first in order
    // traversal, and assign balance factor.
    balance(node) {
        if (!node) {
            return;
        }
        this.balance(node.left);
        this.balance(node.right);
        // Handle the balance factor
    }
}
exports.avl = new AVL();
//# sourceMappingURL=avl.js.map