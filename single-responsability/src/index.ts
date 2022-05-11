// import express from 'express';

import { Invoice } from "./invoice";
import { Book } from "./book";

// const app = express();
// const port = 3000;

// app.get('/', (request, response) => {
//     response.send('Hello World!');
// });

// app.listen(port, ()=> console.log(`server listening on ${port}`));

const book = new Book('asd',2,3,'isbn')
const invoice = new Invoice(book,1,3,4);
invoice.printer