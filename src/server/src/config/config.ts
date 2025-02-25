import 'dotenv/config';

export const config = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  auth: {
    defaultUser: process.env.DEFAULT_USER,
    defaultPassword: process.env.DEFAULT_PASSWORD,
    defaultEmail: process.env.DEFAULT_EMAIL,
  }
};