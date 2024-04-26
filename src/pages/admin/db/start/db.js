import mysql from 'mysql'

export function dbQuery(databaseQuery) {
    const connection = new mysql.createConnection({
        host: 'localhost',
        database: 'altawebs_web',
        user: 'root',
        password: 'zLowy',
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
