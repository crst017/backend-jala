import amqp = require('amqplib/callback_api');
import { injectable } from 'inversify';

@injectable()
export class StatsService {

    params;
    queue = 'stats';
    connection: amqp.Connection;
    channel: amqp.Channel;

    constructor() {
        this.params = {
            hostname: 'DESKTOP-PM304DL',
            port: 5672,
            username: 'cris',   
            password: 'cris'
        };
        this.stablishConnection();
    }

    stablishConnection() {
        amqp.connect( this.params , ( error , connection ) => {

            if (error) console.log(error);
            this.connection = connection;

            connection.createChannel( (error, channel) => {

                console.log('Connection stablished - Sender');
                this.channel = channel;
            })
        })
    }

    sendMessage( message: string ) {
        if(!this.channel) this.stablishConnection();

        this.channel.assertQueue( this.queue, { durable: false });
        this.channel.sendToQueue( this.queue, Buffer.from(message));
    }

    closeConnection() {
        this.connection.close();
    }
}