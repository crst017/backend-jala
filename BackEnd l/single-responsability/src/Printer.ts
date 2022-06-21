export default class Printer implements IPrintable {

    constructor() {}

    print(type: string): void {
        if ( type = 'digital') console.log('Printing digital');
        if ( type = 'physical') console.log('Printing physical');
    }
}