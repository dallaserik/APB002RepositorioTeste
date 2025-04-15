const { Pool } = require('pg'); // ou 'mysql' para MySQL

const pool = new Pool({
    user: 'seu_usuario',
    host: 'localhost',
    database: 'nome_do_banco',
    password: 'sua_senha',
    port: 5432, // ou 3306 para MySQL
});

module.exports = pool;