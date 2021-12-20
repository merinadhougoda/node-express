
const dotenv = require('dotenv');

dotenv.config();

exports.development = {
  client: 'postgres',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'merina@123',
    database: 'secret-sharing-app'
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  }
};
