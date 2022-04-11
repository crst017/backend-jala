import express, { request, response } from 'express'

const app = express();
const port = 3000;

app.get('/', ( request, response ) => {
    response.send('Hello my friend')
});

app.listen( port, () => {
    console.log(`Server listening on ${port}`)
});