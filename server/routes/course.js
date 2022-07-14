const express = require('express');
const router = express.Router();

const { requireSignIn, checkInstructor, checkAdmin, checkAuth } = require('../middleware/auth')
const { uploadImage } = require('../controllers/course')
router.post('/image-upload', uploadImage)


module.exports = router