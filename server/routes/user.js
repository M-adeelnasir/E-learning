const express = require('express');
const router = express.Router();

const { create, login } = require('../controllers/user')

router.post('/user/add', create)
router.post('/user/login', login)

module.exports = router