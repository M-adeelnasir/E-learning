const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 200,
    },
    slug: {
        type: String,
        required: true,
        lowercase: true
    },
    content: {
        type: {},
        min: 6
    },
    video: {},
    free_preview: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 200,
    },
    slug: {
        type: String,
        required: true,
        lowercase: true
    },
    level: {
        type: String,
        required: true,
    },
    description: {
        type: {},
        min: 6,
        required: true
    },
    price: {
        type: Number,
        default: 9.99
    },
    image: {},
    category: {
        type: String,
    },
    published: {
        type: Boolean,
        default: false
    }
    ,
    paid: {
        type: Boolean,
        default: true
    },
    instructor: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    lessons: [lessonSchema],

    courses: [{
        type: ObjectId,
        ref: 'Course'
    }]



}, { timestamps: true })


// exports.module = mongoose.model()
module.exports = Course = mongoose.model("Course", courseSchema)