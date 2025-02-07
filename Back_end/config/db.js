const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// Use DATABASE_URL to create the connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // For Neon, typically needed unless you provide a CA certificate
    }
  }
});

module.exports = { sequelize, Sequelize };
