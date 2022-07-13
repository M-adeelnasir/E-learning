const express = require('express');
const router = express.Router();

const { requireSignIn, checkInstructor, checkAdmin, checkAuth } = require('../middleware/auth')
const { makeInstructor, currentInstructor } = require('../controllers/instructor')

router.get('/user/make-instructor', requireSignIn, makeInstructor)
router.get('/instructor', requireSignIn, checkInstructor, currentInstructor)

module.exports = router