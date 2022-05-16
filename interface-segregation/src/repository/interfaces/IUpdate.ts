export default interface IUpdate<T> {

    update(id: number, entity: T): T;
    delete(id: number): void;
    get(id: number): T;
}
