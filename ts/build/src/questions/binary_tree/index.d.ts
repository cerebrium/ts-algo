export interface BNode<T> {
    val: T;
    left?: BNode<T>;
    right?: BNode<T>;
}
