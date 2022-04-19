// Update with your config settings.


//mysql -u UUUUU -p -h HHHHH

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

  development: {
    client: "mysql",
    connection: {
      host: "XXXXXXXXXXXXXX", 
      database: "XXXXXXXXXXXXXX",
      user: "XXX",
      password: "XXX",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "XXX",
      password: "XXX",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "XXX",
      password: "XXX",
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
