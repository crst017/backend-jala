export default interface Repository<T> {

    insert(entity: T): T;
    update(id: number, entity: T): T;
    delete(id: number): void;
    get(id: number): T;

}