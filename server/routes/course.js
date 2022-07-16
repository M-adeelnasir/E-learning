const express = require('express');
const router = express.Router();

const { requireSignIn, checkInstructor, checkAdmin, checkAuth } = require('../middleware/auth')
const { uploadImage, removeImage, createCourse } = require('../controllers/course')
router.post('/image-upload', requireSignIn, checkInstructor, uploadImage)
router.post('/remove/course-image', requireSignIn, checkInstructor, removeImage)
router.post('/course/create', requireSignIn, checkInstructor, createCourse)


module.exports = router