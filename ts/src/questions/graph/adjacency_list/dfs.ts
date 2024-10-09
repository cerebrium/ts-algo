/*
 *
 * Graphs are awesome! This one will be using an adjacency list
 * structure. The ahjacency list is one of the most commonly
 * used ways of representing a graph.
 *
 * [
 * [1]
 * [2]
 * [3]
 * [4]
 * [5]
 * [0]
 * ]
 *
 * The list above represents a circle. This is an unweighted
 * Graph though. The way to read an adjacency list is as follows:
 *
 * The index is the node
 * The values are the edges.
 *
 * The following represents a proper graph with weights.
 * [
 * [[1, 2], [4, 12]],
 * [[2, 4]]
 * [[3, 8]]
 * [[4, 9]]
 * [[5, 2]]
 * [[0, 4]]
 * ]
 *
 * This is the proper way to represent an adjacency list. The
 * index still represents the node, but at each node there
 * is an array of tuples which are its children. The children
 * are weighted. The first index is the location of the node,
 * the second index of the tuple is the weight of the edge.
 *
 * The above is a weighted graph of a circle, where the first (0)
 * node also has an edge to the fourth node.
 *
 * What we want to do in this algorith is to determine a path
 * from a given location, to a target (given) location. We
 * are not worried about weights yet, that will come up first
 * in the next algorithm which is an implementation of
 * djikstras.
 *
 * For this fuction, we will expect a path, represented as an
 * array of node values (numbers) from a starting point to
 * an ending pointlist: Array<number[]>.
 */

export class dfs {
  private list: Array<[number, number][]>;
  private visited: Array<number>;
  private target = -1;
  private start = -1;

  constructor({list}: {list: Array<[number, number][]>}) {
    this.list = list;
    this.visited = new Array(list.length).fill(-1);
  }

  private traverse({child, parent}: {child: number; parent?: number}): void {}

  private create_path(): number[] | [] {
    return [];
  }

  public find_node({
    start,
    target,
  }: {
    start: number;
    target: number;
  }): [] | number[] {
    return [];
  }
}
