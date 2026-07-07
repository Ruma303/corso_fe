const express = require('express');
const router = express.Router();

const { getUsers, findUsers } = require('../controllers/userController');

router.get('/users', getUsers);
router.get('/users/:name', findUsers);

module.exports = router;
