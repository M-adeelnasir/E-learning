const express = require('express');
const router = express.Router();

const { create, login, logout } = require('../controllers/user')

router.post('/user/add', create)
router.post('/user/login', login)
router.get('/user/logout', logout)

module.exports = router