import amqp = require('amqplib/callback_api');

const queue = 'hello';
const exchangeName = 'fanout-test';
const exchangeType = 'fanout';

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
        
            channel.assertQueue( queue, { durable: false });

            channel.assertExchange( exchangeName, exchangeType )
            
            channel.bindQueue( queue, exchangeName, '' );
            
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