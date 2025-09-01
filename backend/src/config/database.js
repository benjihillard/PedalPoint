const { Pool } = require('pg');

// Create PostgreSQL connection pool
const createPool = () => {
  const pool = new Pool({
    host: (typeof process !== 'undefined' && process.env && process.env.DB_HOST) || 'localhost',
    port: (typeof process !== 'undefined' && process.env && process.env.DB_PORT) || 5432,
    database: (typeof process !== 'undefined' && process.env && process.env.DB_NAME) || 'pedalpoint',
    user: (typeof process !== 'undefined' && process.env && process.env.DB_USER) || 'pedalpoint',
    password: (typeof process !== 'undefined' && process.env && process.env.DB_PASSWORD) || 'pedalpoint123',
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
  });

  // Test database connection
  pool.on('connect', () => {
    console.log('✅ Connected to PostgreSQL database');
  });

  pool.on('error', (err) => {
    console.error('❌ Unexpected error on idle client', err);
    // Graceful shutdown instead of process.exit
    console.error('Shutting down due to database error');
  });

  return pool;
};

module.exports = { createPool }; 