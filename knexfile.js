// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
     connection: {
      host: '127.0.0.1',
      user: 'root',
<<<<<<< HEAD
      password: 'root',
=======
      password: '',
>>>>>>> b28b92c9bab87495484c5cc79a16c7ab69bb2343
      database: 'react'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
<<<<<<< HEAD
      password: 'root',
=======
      password: '',
>>>>>>> b28b92c9bab87495484c5cc79a16c7ab69bb2343
      database: 'react'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
<<<<<<< HEAD
      password: 'root',
=======
      password: '',
>>>>>>> b28b92c9bab87495484c5cc79a16c7ab69bb2343
      database: 'react'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
