export type DjikNode = number[];
export type DjikMap = Map<number, number>;
export declare class DjikHeap {
    data: DjikNode[];
    private map;
    has_nodes(): boolean;
    add_node(node: number[]): void;
    check_and_update_weight(node: number, weight: number): boolean;
    private bubble_up;
    remove_node(): DjikNode | null | undefined;
    private heapify_down;
    private get_lowest_child;
    private get_left_child_idx;
    private get_right_child_idx;
    private get_parent_idx;
    private swap;
}
