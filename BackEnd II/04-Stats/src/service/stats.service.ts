import { Message } from 'amqplib/callback_api';
import amqp = require('amqplib/callback_api');
import { UserService } from './user.service';

const exchangeName = 'fanout-test';
const exchangeType = 'fanout';

export class StatsService {

    params;
    queue = 'stats';
    userService: UserService;

    constructor() {
        this.userService = new UserService();
        this.params = {
            hostname: 'DESKTOP-PM304DL',
            port: 5672,
            username: 'cris',   
            password: 'cris'
        };

    }

    stablishConnection() {
        amqp.connect( this.params , (err , conn ) => {

            if (err) console.log(err);

            conn.createChannel( (err, channel) => {

                console.log('Connection stablished');
                channel.assertQueue( this.queue, {durable: false});
                channel.consume( this.queue, ( msg ) => {

                    if( msg ) {
                        this.handleMessage(msg);
                        channel.ack( msg );
                    }
                })
            })
        })
    }

    handleMessage(message: Message) {
        
        const stringMessage = message.content.toString();
        const parsedMessage = JSON.parse(stringMessage);
        this.userService.updateUserAttendance(parsedMessage.userId);
    }
}
