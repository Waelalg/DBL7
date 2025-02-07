const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
//////////////////////////////////////////////
const authRoutes = require('./routes/auth');
const roleRoutes = require('./routes/role');
const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid"); // Import UUID generator
const http = require("http");
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Allow all origins (you may want to restrict this)
    },
});


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

server.listen(PORT, () => {    console.log(`Server is running on port ${PORT}.`);});

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("send_alert", async (alert) => {
        console.log("New alert received:", alert);

        try {
            // Create a new alert in the database
            // const newAlert = await prisma.alert.create({
            //     data: {
            //         alertId: uuidv4(), // Generate a unique ID
            //         severity: alert.severity, // Ensure this is sent from the frontend
            //         message: alert.message,
            //         timestamp: new Date(), // Store current timestamp
            //     },
            // });

            console.log("Alert saved to database:", newAlert);

            // Broadcast the saved alert to all connected clients
            io.emit("receive_alert", newAlert);
        } catch (error) {
            console.error("Error saving alert:", error);
        }
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});