// module
let mysql = require('mysql2');

//créer la connection
let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: "village"
});

// connection
connection.connect(function (err) {
    console.log(err);
    if (err) throw err;
});

//export
module.exports = connection;