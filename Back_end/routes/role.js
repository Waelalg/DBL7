const express = require('express');
const { createRole } = require('../controllers/role.controller'); // Adjust the path if necessary

const router = express.Router();

// Route to create a new role
router.post('/roles', createRole);

module.exports = router;
