export declare class dfs {
    private list;
    private visited;
    private target;
    private start;
    constructor({ list }: {
        list: Array<[number, number][]>;
    });
    private traverse;
    private create_path;
    find_node({ start, target, }: {
        start: number;
        target: number;
    }): [] | number[];
}
