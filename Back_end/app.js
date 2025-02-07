// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Destructure the Sequelize instance from your configuration file.
const { sequelize } = require('./config/db');

// Load all models (this will also set up associations via models/index.js)
const db = require('./models');

// Import your route files
const authRoutes = require('./routes/auth');
const roleRoutes = require('./routes/role');

const app = express();

// Middleware setup
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.use('/api/auth', authRoutes);
app.use('/api', roleRoutes);

const PORT = process.env.PORT || 3000;

// Database connection, synchronization, and server startup
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    // Force sync: drops all tables and recreates them based on the model definitions.
    return sequelize.sync({ force: true });
  })
  .then(() => {
    console.log('Database synchronized successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect or synchronize the database:', error);
    process.exit(1);
  });
