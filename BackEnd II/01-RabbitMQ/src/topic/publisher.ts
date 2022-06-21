import amqp = require('amqplib/callback_api');
const exchangeName = process.env.EXCHANGE || 'topic-test';
const routingKey = process.env.ROUTING_KEY || '';
const exchangeType = 'topic';

console.log({
    exchangeName,
    exchangeType,
    routingKey
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
            
            const message = 'Hello world 2';

            channel.assertExchange( exchangeName, exchangeType );

            channel.publish(
                exchangeName,
                routingKey,
                Buffer.from(message)
            )
        
            console.log(exchangeName, ' message sended. ' + message);
        
            setTimeout( () => {
                connection.close();
                process.exit(0)
            },500)
        });
    }
);