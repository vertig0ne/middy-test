// Update with your config settings.

export default {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
    port: process.env.DB_PORT | 3306,
  },
  migrations: {
    directory: './migrations',
  },
};
