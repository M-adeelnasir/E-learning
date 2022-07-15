const express = require('express');
const router = express.Router();

const { requireSignIn, checkInstructor, checkAdmin, checkAuth } = require('../middleware/auth')
const { uploadImage, removeImage } = require('../controllers/course')
router.post('/image-upload', uploadImage)
router.post('/remove/course-image', removeImage)


module.exports = router