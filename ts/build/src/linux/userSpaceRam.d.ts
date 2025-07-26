type TNode = {
    name: string;
    children: TNode[];
};
declare function createTooMuchRam(): TNode[];
declare const tooMuchRam: TNode[];
