import readline from "readline"
import mysql from "mysql";
import {Config} from '../../settings.js'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const create_default_user = async () => {

    rl.question("What default username you want use: ", function (name) {
        rl.question("What default email you want use: ", function (email) {
            rl.question("What default password you want use: ", async function (password) {
                try {


                    const res = await dbQuery(`SELECT * from User;`);
                    console.log(await res)
                    await dbQuery(`INSERT INTO User (name, email, password) VALUES ('${name}', '${email}', '${password}');`);
                } catch (err) {
                    console.log(err)
                }
                rl.close();
            });
        });
    });

    rl.on("close", function () {
        console.log("Success initialized database.")
        process.exit(0);
    });
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