module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'pg-654eb1f-fathomless-headland-49488.c.aivencloud.com',
      port: 27913,
      user: 'avnadmin',
      password: '',
      database: 'defaultdb',
      ssl: {
        rejectUnauthorized: false // Recommended for Heroku deployments
      }
    }
  }
};