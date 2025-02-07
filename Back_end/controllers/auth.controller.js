const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure the path is correct

// Controller for user signup
exports.signup = async (req, res) => {
    try {
        const { username, email, password, roleid } = req.body;
        console.log(username,email,password,roleid);
        // Ensure all fields are provided
        if (!username || !email || !password || !roleid) {
            return res.status(400).send({ message: 'All fields are required.' });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 8);

        // Create the user
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            roleid, // Ensure correct field is used
        });

        res.status(201).send({ 
            message: 'User registered successfully!',
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                roleid: user.roleid,
            }
        });
    } catch (error) {
        console.error('Error during user signup:', error.message);
        res.status(500).send({ message: 'An error occurred during registration.' });
    }
};

// Controller for user signin
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Ensure required fields are provided
        if (!email || !password) {
            return res.status(400).send({ message: 'Email and password are required.' });
        }

        // Find the user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send({ message: 'User not found.' });
        }
        console.log(user)
        // Compare passwords
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({ message: 'Invalid password.' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 86400, // 24 hours
        });
        console.log("token",token)
        res.status(200).send({
            message: 'Signin successful!',
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                roleid: user.roleid,
            },
            accessToken: token,
        });
    } catch (error) {
        console.error('Error during user signin:', error.message);
        res.status(500).send({ message: 'An error occurred during signin.' });
    }
};
