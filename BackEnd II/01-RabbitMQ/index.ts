import amqp = require('amqplib/callback_api');

amqp.connect({
    hostname: 'my-desktop',
    port: 5672,
    username: 'cris',
    password: 'cris'
}), ( error, connection) => {

    if (error) {
        console.log(error);
    }

    connection.createChannel( ( error1, channel ) => {
        const queue = 'hello';
        const message = 'Hello world';

        channel.assertQueue( queue, { durable: false });
        channel.sendToQueue( queue, Buffer.from(message));

        console.log('message sended');

    });

    setTimeout( () => {
        connection.close();
        process.exit(0)
    },500)
}