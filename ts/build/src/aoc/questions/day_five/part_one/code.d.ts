export declare class DayFive {
    private ajacency_list;
    private are_cycles;
    private updates;
    handle_day_five: () => number;
    constructor(ordering: string[], updates: number[][]);
    private top_sort;
    private top_sort_walk;
    private walk_orders_top_sort;
    private non_top_sort;
    private make_adjacency_list;
    private detect_cycles;
    private walk;
}
