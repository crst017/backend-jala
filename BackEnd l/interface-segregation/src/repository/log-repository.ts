import Log from './entities/log';
import IWrite from './repository/interfaces/IWrite';

export default class LogRepository implements IWrite<Log>{
    insert(entity: Log): Log {
        console.log('insert ok');
        return new Log();
    }
}