const knex = require('knex');
// import knex from 'knex';

export const db = knex({
  client: 'postgresql',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'merina@123',
    database: 'secret-sharing-app'
  }
});
