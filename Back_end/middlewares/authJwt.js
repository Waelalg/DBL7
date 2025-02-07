const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        // Get token from the request headers
        const token = req.headers['x-access-token'];

        // Check if token is provided
        if (!token) {
            return res.status(403).send({ message: 'No token provided.' });
        }

        // Verify the token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error('Token verification error:', err.message);
                return res.status(401).send({ message: 'Unauthorized access.' });
            }

            // Attach user ID from the decoded token to the request object
            req.userId = decoded.id;
            next();
        });
    } catch (error) {
        console.error('Error in token verification middleware:', error.message);
        res.status(500).send({ message: 'Internal server error.' });
    }
};

module.exports = { verifyToken };
