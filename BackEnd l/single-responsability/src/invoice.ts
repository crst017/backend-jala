import { Book } from "./book";
import Printer from "./Printer";

export class Invoice {
    printer: Printer;

    constructor(
        public book: Book,
        public quantity: number,
        public tax: number,
        public total: number) {
        
        this.printer = new Printer()
    }

    calculateTotal() {
        return this.total + this.tax;
    }

    printInvoice() {
        console.log('Printing...');
    }

    saveToFile() {
        console.log('Saving...');
    }
}