const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
//////////////////////////////////////////////
const authRoutes = require('./routes/auth');
const roleRoutes = require('./routes/role');


const app = express();
dotenv.config();

// Middleware setup
app.use(cors({
    origin: '*',
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', roleRoutes);


///////////////////////////////

const PORT = process.env.PORT || 3000;


        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });