// module
var mysql = require('mysql2');

//créer la connection
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: "village d'ici"
});

// connection
connection.connect(function (err) {
    if (err) throw err;
});

//export
module.exports = connection;