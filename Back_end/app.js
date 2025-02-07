const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
const sequelize = require('./config/db');
//////////////////////////////////////////////
const authRoutes = require('./routes/auth');
const roleRoutes = require('./routes/role');


const app = express();
dotenv.config();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', roleRoutes);


///////////////////////////////

const PORT = process.env.PORT || 3000;

// Database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully.');
        // Start the server only after successful DB connection
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit process on database connection failure
    });
