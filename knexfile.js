// Update with your config settings.


//mysql -u UUUUU -p -h HHHHH

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

  development: {
    client: "mysql",
    connection: {
      host: "us-cdbr-east-05.cleardb.net", 
      database: "heroku_d6b8266eaa8bbb9",
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
