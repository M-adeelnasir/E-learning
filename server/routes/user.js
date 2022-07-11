const express = require('express');
const router = express.Router();

const { create, login, logout, currentUser, forgotPassword } = require('../controllers/user')
const { requireSignIn, checkAdmin, checkAuth } = require('../middleware/auth')

router.post('/user/add', create)
router.post('/user/login', login)
router.get('/user/logout', logout)
router.get('/current-user', requireSignIn, currentUser)
router.post('/forgot-password', forgotPassword)

module.exports = router