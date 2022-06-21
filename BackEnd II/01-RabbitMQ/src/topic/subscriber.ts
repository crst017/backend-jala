import amqp = require('amqplib/callback_api');
const queue = process.env.QUEUE || 'hello-queue';
const exchangeName = process.env.EXCHANGE || 'topic-test';
const exchangeType = 'topic';
const pattern = process.env.PATTERN || '';

console.log({
    queue,
    exchangeName,
    pattern
})

amqp.connect({

    hostname: 'DESKTOP-PM304DL',
    port: 5672,
    username: 'cris',
    password: 'cris'

    }, ( error, connection) => {

        if (error) {
            console.log(error);
        }

        connection.createChannel( ( error1, channel ) => {
        
            channel.assertQueue(queue)

            channel.assertExchange(exchangeName, exchangeType)
            
            channel.bindQueue(queue, exchangeName, pattern)
            
            console.log('Waiting for message in %s', queue);

            channel.consume( queue, ( msg ) => {
                console.log('[x] Received %s', msg?.content.toString());
                if( msg ) {
                    channel.ack( msg );
                }
            })
            
        });
    }
)

// async function subscriber() {
//     // const connection = await amqp.connect('amqp://localhost')
//     // const channel = await connection.createChannel()

//     await channel.assertQueue(queue)

//     await channel.assertExchange(exchangeName, exchangeType)

//     await channel.bindQueue(queue, exchangeName, pattern)

//     channel.consume(queue, (message) => {
//         const content = JSON.parse(message.content.toString())

//         console.log(`Received message from "${queue}" queue`)
//         console.log(content)

//         channel.ack(message)
//     })
// }
