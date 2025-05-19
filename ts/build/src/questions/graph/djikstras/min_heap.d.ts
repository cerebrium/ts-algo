export type DjikNode = [number, number];
export declare class DjikHeap {
    data: DjikNode[];
    has_nodes(): boolean;
    add_node(d_node: DjikNode): void;
    private bubble_up;
    remove_node(): DjikNode | null | undefined;
    private heapify_down;
    private get_lowest_child;
    private get_left_child_idx;
    private get_right_child_idx;
    private get_parent_idx;
    private swap;
}
