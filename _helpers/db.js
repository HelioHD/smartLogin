const config = require('/app/config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();  

async function initialize() {
    // Cria o banco de dados se não já existir
    const { host, porta, usuario, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port: porta, user: usuario, password: password });
    console.log("Conectou no MYSQL");
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // conecta ao banco 
    const sequelize = new Sequelize(database,usuario, password,
         { 
        host:host,
        dialect: 'mysql'
         });
   /* const sequelize = new Sequelize( 
        config.get('database.banco-de-dados'),
        config.get('database.usuario'),
        config.get('database.password'),
        {
            host:config.get('database.host'),
            dialect: 'mysql'
        });
     */
    // init models and add them to the exported db object
    db.User = require('../users/user.model')(sequelize);

    // sincroniza todos os dados da tabela existente
    await sequelize.sync();
}