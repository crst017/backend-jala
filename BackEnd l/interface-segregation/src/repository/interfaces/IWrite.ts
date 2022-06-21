export default interface IWrite<T> {

    insert(entity: T): T;
    

}