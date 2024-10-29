const mysql = require('mysql2');

const db  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myCrudApp'
});

db.connect((err) => {
    if (err) {
        console.log("Error in db connection",err);
        return;
    }
    console.log("db connected successfully");
});

module.exports = db;