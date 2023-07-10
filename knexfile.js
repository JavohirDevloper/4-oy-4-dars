import 'dotenv/config';

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5433,
      database: 'gql',
      user: 'postgres',
      password: '1234',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations',
    },
    seeds: {
      directory: 'db/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5433,
      database: 'gql',
      user: 'postgres',
      password: '1234',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations',
    },
    seeds: {
      directory: 'db/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5433,
      database: 'gql',
      user: 'postgres',
      password: '1234',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations',
    },
    seeds: {
      directory: 'db/seeds',
    },
  },
};

