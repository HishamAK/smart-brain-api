module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'pg-654eb1f-fathomless-headland-49488.c.aivencloud.com',
      port: 27913,
      user: 'avnadmin',
      password: 'AVNS_Lw2CxF_zj9Id-WA6xp9',
      database: 'defaultdb',
      ssl: {
        rejectUnauthorized: false // Recommended for Heroku deployments
      }
    }
  }
};