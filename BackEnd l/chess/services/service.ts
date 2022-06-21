export default interface Service<T> {
    
    // functiones declararas que se usan en todas las entidades a futuro
    create( item: T): string;

}