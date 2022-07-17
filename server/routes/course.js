const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');


const { requireSignIn, checkInstructor, checkAdmin, checkAuth } = require('../middleware/auth')
const { uploadImage, removeImage, createCourse, getInstructorCourses, getCourse, uploadVideo } = require('../controllers/course')
router.post('/image-upload', requireSignIn, checkInstructor, uploadImage)
router.post('/remove/course-image', requireSignIn, checkInstructor, removeImage)
router.post('/course/create', requireSignIn, checkInstructor, createCourse)
router.get('/instructor/courses', requireSignIn, checkInstructor, getInstructorCourses)
router.get('/instructor/courses', requireSignIn, checkInstructor, getInstructorCourses)
router.get('/course/:slug', requireSignIn, checkInstructor, getCourse)
router.post('/course/video-upload', requireSignIn, formidable(), uploadVideo)



module.exports = router