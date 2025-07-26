type TNode = {
  name: string;
  children: TNode[];
};

function createTooMuchRam() {
  const nodes: TNode[] = [];
  for (let i = 0; i < 1000; i++) {
    nodes.push({name: 'breakTheRam', children: []});
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let x = 0; x < nodes.length; x++) {
      nodes[i].children.push(nodes[x]);
    }
  }

  return nodes;
}

const tooMuchRam = createTooMuchRam();
