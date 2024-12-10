import {BNode} from '.';

class AVL<T> {
  root: null | BNode<T>;

  constructor() {
    this.root = null;
  }

  private ll_shift(node: BNode<T>) {
    if (!node) {
      return;
    }
  }
  private rr_shift(node: BNode<T>) {
    if (!node) {
      return;
    }
  }
  private lr_shift(node: BNode<T>) {
    if (!node) {
      return;
    }
  }
  private rl_shift(node: BNode<T>) {
    if (!node) {
      return;
    }
  }

  // We will do a depth first in order
  // traversal, and assign balance factor.
  private balance(node: BNode<T> | undefined) {
    if (!node) {
      return;
    }

    this.balance(node.left);
    this.balance(node.right);

    // Handle the balance factor
  }
}

export const avl = new AVL();
