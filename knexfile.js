// Update with your config settings.

//mysql://b12ad4b364fb46:672c111e@us-cdbr-east-05.cleardb.net/heroku_d6b8266eaa8bbb9?reconnect=true

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

  development: {
    client: "mysql",
    connection: {
      host: "us-cdbr-east-05.cleardb.net", 
      database: "heroku_d6b8266eaa8bbb9",
      user: "b12ad4b364fb46",
      password: "672c111e",
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
      user: "root",
      password: "Ayumu0718",
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
      user: "root",
      password: "Ayumu0718",
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};