export interface IWrite<T> {
    create(item: T): string;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}