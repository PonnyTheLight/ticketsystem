import mysql from "mysql";
import {dbQuery} from '../start/db.js'
try {
    await dbQuery(`CREATE TABLE IF NOT EXISTS Events (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name varchar(50) NOT NULL,
        desc_value varchar(150) NOT NULL,
        img varchar(200),
        active BOOL DEFAULT false,
        fecha DATE
        )`, function (error, results, fields) {
        if (error) throw error;
        return console.log("Success")
    });
} catch (err) {
    console.error(err.message)
}

try {
    await dbQuery(`CREATE TABLE IF NOT EXISTS Tickets (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    userid INT,
    event_id INT,
    used BOOLEAN DEFAULT false,
    valid DATE NOT NULL
);`, function (error, results, fields) {
        if (error) throw error;
        return console.log("Success")
    });

} catch (err) {
    console.error(err.message)
}

try {
    await dbQuery(`ALTER TABLE User ADD (worker BOOLEAN DEFAULT false);`,
        function (error, results, fields) {
        if (error) throw error;
        return console.log("Success")
    });

} catch (err) {
    console.error(err.message)
}
