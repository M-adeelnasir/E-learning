const express = require('express');
const router = express.Router();


const { requireSignIn, checkInstructor, checkAdmin, checkAuth } = require('../middleware/auth')
const { markAsComplet } = require('../controllers/lessonComplete')

router.post('/lesson/make-as-complete', requireSignIn, markAsComplet)


module.exports = router