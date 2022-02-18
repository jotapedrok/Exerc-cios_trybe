const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    port: '3106',
    user: 'root',
    password: 'Jota!1999',
    database: 'model_example' });

module.exports = connection;