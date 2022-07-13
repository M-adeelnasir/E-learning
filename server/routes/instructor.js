const express = require('express');
const router = express.Router();

const { requireSignIn, checkAdmin, checkAuth } = require('../middleware/auth')
const { makeInstructor } = require('../controllers/instructor')

router.get('/user/make-instructor', requireSignIn, makeInstructor)

module.exports = router