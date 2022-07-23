const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const markComplete = new mongoose.Schema({
    course: {
        type: ObjectId,
        ref: 'Course'
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    lessons: []


}, { timestamps: true })


module.exports = mongoose.model('LessonComplete', markComplete)