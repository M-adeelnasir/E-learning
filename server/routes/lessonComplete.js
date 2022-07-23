const express = require('express');
const router = express.Router();


const { requireSignIn, checkInstructor, checkAdmin, checkAuth } = require('../middleware/auth')
const { markAsComplet, completedLessons } = require('../controllers/lessonComplete')

router.post('/lesson/make-as-complete', requireSignIn, markAsComplet)
router.get('/marked-lessons/:courseId', requireSignIn, completedLessons)


module.exports = router