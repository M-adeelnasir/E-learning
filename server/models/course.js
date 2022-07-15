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
    video_link: {},
    free_preview: {
        type: Bolean,
        default: false
    }
}, { timestamps: true })


const courseSchema = new mongoose.Schema({
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
        type: Bolean,
        default: false
    }
    ,
    paid: {
        type: Bolean,
        default: true
    },
    instructor: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    lessons: [lessonSchema]



}, { timestamps: true })


exports.module = mongoose.Model("Course", courseSchema)