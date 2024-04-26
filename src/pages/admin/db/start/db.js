import mysql from 'mysql'
import {Config} from '../../settings.js'

export function dbQuery(databaseQuery) {
    const connection = new mysql.createConnection({
        host: Config.db.host,
        database: Config.db.database,
        user: Config.db.user,
        password: Config.db.password,
        port: Config.db.port,
    });

    return new Promise(data => {
        connection.query(databaseQuery, function (error, result) { // change db->connection for your code
            if (error) {
                console.log(error);
                connection.end()
                throw error;
            }
            try {
                connection.end()
                return data(result);

            } catch (error) {
                data({});
                connection.end()
                throw error;
            }

        });
    });

}
