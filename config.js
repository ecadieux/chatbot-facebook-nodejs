module.exports = {
    FB_PAGE_TOKEN: process.env.HEROKU_FB_PAGE_TOKEN,
    FB_VERIFY_TOKEN: process.env.HEROKU_FB_VERIFY_TOKEN,
    API_AI_CLIENT_ACCESS_TOKEN: process.env.HEROKU_API_AI_CLIENT_ACCESS_TOKEN,
    FB_APP_SECRET: process.env.HEROKU_FB_APP_SECRET,
    SERVER_URL: process.env.HEROKU_SERVER_URL,
    SENDGRID_API_KEY: process.env.HEROKU_SENDGRID_API_KEY,
    EMAIL_FROM: process.env.HEROKU_EMAIL_FROM,
    EMAIL_TO: process.env.HEROKU_EMAIL_TO,
    PG_CONFIG: {
      user: process.env.HEROKU_DB_USER,
      database: process.env.HEROKU_DATABASE,
      password: process.env.HEROKU_DB_PASSWORD,
      host: process.env.HEROKU_DB_HOST,
      port: process.env.HEROKU_DB_PORT,
      max: process.env.HEROKU_DB_MAX,
      idleTimeoutMillis: process.env.HEROKU_DB_IDLETIMEOUTMILLIS,
},

};
