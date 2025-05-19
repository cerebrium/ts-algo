export type DjikNode = [number, number];
export type DjikMap = Map<number, number>;
export declare class DjikHeap {
    data: DjikNode[];
    private map;
    has_nodes(): boolean;
    add_node(node: [number, number]): void;
    update_weight(node: number, weight: number): void;
    private bubble_up;
    remove_node(): DjikNode | null | undefined;
    private heapify_down;
    private get_lowest_child;
    private get_left_child_idx;
    private get_right_child_idx;
    private get_parent_idx;
    private swap;
}
