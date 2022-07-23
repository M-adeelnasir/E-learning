const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const markComplete = new mongoose.Schema({
    courseId: {
        type: ObjectId,
        ref: 'Course'
    },
    subrciberId: {
        type: ObjectId,
        ref: 'User'
    },
    lessons: []


}, { timestamps: true })


module.exports = mongoose.model('LessonComplete', markComplete)