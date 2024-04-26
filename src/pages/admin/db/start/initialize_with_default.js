import mysql from "mysql";
const create_default_user = async () => {
    const res = await dbQuery(`SELECT * from user;`);
    console.log(await res)
    await dbQuery(`INSERT INTO user (name, email, password) VALUES ('ponny', 'contact@thisisaltawebs.com', '1234');`);
    return console.log('Completed Data Base with Default User.')
}

try {
    await dbQuery(`CREATE TABLE IF NOT EXISTS User (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name varchar(50) NOT NULL,
        email varchar(50),
        password varchar(50) NOT NULL,
        admin BOOL DEFAULT false
        )`, function (error, results, fields) {
        if (error) throw error;
        return console.log("Success")
    });

    await dbQuery(`CREATE TABLE IF NOT EXISTS Settings (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    int_value INT,
    string_value TEXT,
    bool_value BOOL,
    float_value FLOAT,
    decimal_value DECIMAL,
    date_value DATE,
    time_value TIME
);`, function (error, results, fields) {
        if (error) throw error;
        return console.log("Success")
    });

} catch (err) {
    console.error(err.message)
    create_default_user().then(r => console.log(""))
}

function dbQuery(databaseQuery) {
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
                throw error;
            }
            try {
                console.log(result);

                data(result);

            } catch (error) {
                data({});
                throw error;
            }

        });
    });

}

create_default_user().then(r => console.log(""))