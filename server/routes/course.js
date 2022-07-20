const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');


const { requireSignIn, checkInstructor, checkAdmin, checkAuth } = require('../middleware/auth')
const { uploadImage, removeImage, createCourse, getInstructorCourses, getCourse, uploadVideo, removeVideo, addLesson, updateCourse, removeLesson, updateLesson, publishCourse, unpublishCourse, courses, read } = require('../controllers/course')
router.post('/image-upload', requireSignIn, checkInstructor, uploadImage)
router.post('/remove/course-image', requireSignIn, checkInstructor, removeImage)
router.post('/course/create', requireSignIn, checkInstructor, createCourse)
router.get('/instructor/courses', requireSignIn, checkInstructor, getInstructorCourses)
router.get('/instructor/courses', requireSignIn, checkInstructor, getInstructorCourses)
router.get('/course/:slug', requireSignIn, checkInstructor, getCourse)
router.post('/course/video-upload/:instructorId', requireSignIn, checkInstructor, formidable(), uploadVideo)
router.post('/course/video-remove/:instructorId', requireSignIn, checkInstructor, removeVideo)
router.post('/course/add-lesson/:instructorId/:slug', requireSignIn, checkInstructor, addLesson)
router.put('/course/:slug', requireSignIn, checkInstructor, updateCourse)
router.put('/course/lesson-remove/:slug/:lessonId', requireSignIn, checkInstructor, removeLesson)
router.post('/course/lesson-update/:slug/:lessonId', requireSignIn, checkInstructor, updateLesson)
router.put('/course/publish/:courseId', requireSignIn, checkInstructor, publishCourse)
router.put('/course/unpublish/:courseId', requireSignIn, checkInstructor, unpublishCourse)
router.put('/course/:slug', read)

router.get('/courses', courses)



module.exports = router