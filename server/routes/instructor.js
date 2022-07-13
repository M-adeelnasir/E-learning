const express = require('express');
const router = express.Router();

const { requireSignIn, checkAdmin, checkAuth } = require('../middleware/auth')
const { makeInstructor } = require('../controllers/instructor')

router.post('/user/make-instructor', requireSignIn,)

module.exports = router