// database.js
require('dotenv').config();
const databaseConfig = {
    development: {
      client: 'postgresql',
      connection: {
        connectionString: process.env.SUPABASE_URL,
        ssl: { rejectUnauthorized: false } 
      },
    },

  };

  module.exports = databaseConfig[process.env.NODE_ENV || 'development'];
  