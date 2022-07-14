const express = require('express');
const router = express.Router();

const { create, login, logout, currentUser, forgotPassword, resetPassword } = require('../controllers/user')
const { requireSignIn, checkAdmin, checkAuth } = require('../middleware/auth')


router.post('/user/add', create)
router.post('/user/login', login)
router.get('/user/logout', logout)
router.get('/current-user', requireSignIn, currentUser)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password/:resetToken', resetPassword)

module.exports = router