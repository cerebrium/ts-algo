interface BNode {
  val: number;
  left?: BNode;
  right?: BNode;
}

export function make_b_tree() {
  const head: BNode = {val: 10};
  head.left = {val: 5};
  head.left.left = {val: 2};
  head.left.right = {val: 7};
  head.right = {val: 20};
  head.right.right = {val: 25};
  head.right.left = {val: 15};

  return head;
}
