const AWS = require('aws-sdk')
var { nanoid } = require("nanoid");
const User = require('../models/user')
const Course = require('../models/course')
const slugify = require('slugify');
const mongoose = require('mongoose')
const fs = require('fs')
const stripe = require('stripe')(process.env.STRIP_SECRET_KEY);




const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

exports.uploadImage = async (req, res) => {

    try {

        const { image } = req.body
        if (!image) {
            return res.status(400).json({
                success: false,
                msg: "Please Select Image"
            })
        }

        const base64Data = new Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""), "base64")


        const type = image.split('/')[1].split(';')[0]
        const params = {
            Bucket: "elearing",
            Key: `courses/${nanoid()}.${type}`,  //kjsdcbuow.jpeg
            Body: base64Data,
            ACL: 'public-read',
            ContentEncoding: "base64",
            ContentType: `image/${type}`
        };

        // upload image
        s3.upload(params, (err, data) => {
            if (err) {
                console.log(err);
                return res.sendStatus(400)
            }
            res.json({
                success: true,
                data
            })
        })


    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            msg: "SERVER ERROR"
        })

    }

}

exports.removeImage = async (req, res) => {
    try {
        const { image } = req.body;
        console.log(image)
        const params = {
            Bucket: image.Bucket,
            Key: image.key,

        }

        s3.deleteObject(params, (err, data) => {
            if (err) {
                return res.status(400).json({
                    msg: "Image removed Failed"
                })
            }
            console.log(data)
            res.json({
                success: true,
                msg: "Image Delete"
            })
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "SERVER ERROR"
        })
    }
}


exports.createCourse = async (req, res) => {
    try {
        console.log(req.body);
        const { name, description, price, paid, image, level } = req.body;
        const _id = req.user;



        const user = await User.findById(_id)

        if (!user) {
            return res.json({
                sucess: true,
                msg: "No user found"
            })
        }

        const courseExists = await Course.findOne({ slug: slugify(name).toLowerCase() })

        if (courseExists) {
            return res.json({
                success: false,
                msg: "Name Already Taken"
            })
        }

        try {
            const course = await Course.create({
                name, level, description, price, paid, image, slug: slugify(name), instructor: user._id
            })
            console.log(course)
            res.json({
                success: true,
                data: course
            })
        } catch (err) {
            console.log("HIT==>", err)
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.getInstructorCourses = async (req, res) => {
    try {
        const { _id } = req.user;
        const user = await User.findById({ _id })
        if (!user) {
            return res.json({
                sucess: true,
                msg: "No user found"
            })
        }


        const courses = await Course.find({ instructor: _id }).sort({ createdAt: -1 })

        res.json({
            success: true,
            data: courses
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.getCourse = async (req, res) => {
    try {
        const slug = req.params;
        const course = await Course.findOne(slug).populate("instructor", "name _id")
        if (!course) {
            return res.status(404).json({
                success: false,
                msg: "No course found"
            })
        }
        res.json({
            success: true,
            data: course
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


//video upload


exports.uploadVideo = async (req, res) => {
    try {
        const { instructorId } = req.params

        if (req.user._id !== instructorId) return res.sendStatus(400)
        const { video } = req.files

        if (!video) return res.status(400).json({ success: false })

        const type = video.type.split('/')[1]

        const params = {
            Bucket: "elearing",
            Key: `video/${nanoid()}/${type}`,
            Body: fs.readFileSync(video.path),
            ACL: 'public-read',
            ContentType: `video/${type}`

        }

        s3.upload(params, (err, data) => {
            if (err) {
                console.log(err);
                return res.sendStatus(400)
            }
            res.json({
                success: true,
                data
            })
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}

exports.removeVideo = async (req, res) => {
    try {
        const { instructorId } = req.params
        if (req.user._id !== instructorId) return res.sendStatus(400)

        const { video } = req.body
        console.log(video)

        const { Bucket, Key } = video;
        const params = {
            Bucket,
            Key
        }

        s3.deleteObject(params, (err, data) => {
            if (err) {
                console.log(err);
                return res.sendStatus(400)
            }
            res.json({
                success: true,
                data
            })
        })


    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.addLesson = async (req, res) => {
    try {
        const { slug, instructorId } = req.params
        const { video, title, content } = req.body

        console.log(instructorId, req.user._id)

        if (req.user._id !== instructorId) return res.sendStatus(400)

        const course = await Course.findOneAndUpdate({ slug },
            {
                $push: { lessons: { video, title, content, slug: slugify(title) } }
            },
            { new: true, runValidators: true }
        )
        if (!course) {
            return res.json({
                sucess: true,
                msg: "Add lesson failed"
            })
        }

        console.log(course)

        res.json({
            success: true,
            data: course
        })



    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.updateCourse = async (req, res) => {
    try {
        const { slug } = req.body

        console.log(req.body)
        const course = await Course.findOneAndUpdate({ slug }, req.body, { new: true })


        if (req.user._id !== course.instructor._id.toString()) return res.sendStatus(400)

        res.json({
            success: true,
            data: course
        })


    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.removeLesson = async (req, res) => {
    try {

        const { slug, lessonId } = req.params

        const course = await Course.findOneAndUpdate({ slug }, {
            $pull: { lessons: { _id: lessonId } }
        })

        if (course.instructor._id.toString() !== req.user._id) return res.sendStatus(400)


        res.json({
            success: true,
            data: course
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}

exports.updateLesson = async (req, res) => {
    try {
        const { slug: courseSlug, lessonId } = req.params
        const { title, slug, content, video, free_preview, _id } = req.body



        const course = await Course.findOne({ slug: courseSlug })

        console.log(course)
        if (course.instructor.toString() !== req.user._id) return res.sendStatus(400)

        const lesson = await Course.updateOne({ "lessons._id": _id }, {
            $set: {
                "lessons.$.title": title,
                "lessons.$.content": content,
                "lessons.$.slug": slugify(title),
                "lessons.$.free_preview": free_preview,
                "lessons.$.video": video
            }
        }, { new: true })


        res.json({
            success: true,
            data: course
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.publishCourse = async (req, res) => {
    try {
        const { courseId } = req.params

        const courseIns = await Course.findById({ _id: courseId })
        if (courseIns.instructor.toString() !== req.user._id) return res.sendStatus(400)

        const course = await Course.findByIdAndUpdate({ _id: courseId }, { published: true }, { new: true })
        console.log(course)

        res.json({
            success: true,
            data: course
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.unpublishCourse = async (req, res) => {
    try {
        const { courseId } = req.params

        const courseIns = await Course.findById({ _id: courseId })
        if (courseIns.instructor.toString() !== req.user._id) return res.sendStatus(400)

        const course = await Course.findByIdAndUpdate({ _id: courseId }, { published: false }, { new: true })
        console.log(course)
        res.json({
            success: true,
            data: course
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })

    }
}


exports.courses = async (req, res) => {
    try {
        const courses = await Course.find({ published: true }).populate("instructor", "name _id").select("-lessons")

        res.json({
            success: true,
            data: courses
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.read = async (req, res) => {
    try {
        const { slug } = req.params;

        const course = await Course.findOne({ slug }).populate("instructor", "name _id")

        if (!course) return res.sendStatus(404)

        res.json({
            succcess: true,
            data: course
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}

exports.checkEnrolment = async (req, res) => {
    try {
        const { courseId } = req.params

        const user = await User.findById({ _id: req.user._id })


        let ids = []
        let length = user && user.courses && user.courses.length
        for (let i = 0; i < length; i++) {
            ids.push(user.courses[i].toString())
        }
        res.json({
            status: ids.includes(courseId)
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.freeEnrollment = async (req, res) => {
    try {
        const { courseId } = req.params

        const user = await User.findById({ _id: req.user._id })
        if (!user) return res.sendStatus(401)

        const course = await Course.findById({ _id: courseId })

        if (!course) return res.sendStatus(404)

        const enrolledCourse = await User.findByIdAndUpdate({ _id: req.user._id }, {
            //addtoSet make sure no dupliactes of same object
            $addToSet: { courses: { _id: course._id } }
        }, { new: true, runValidators: true })


        res.json({
            success: true,
            data: enrolledCourse,
            msg: "Congratulation, You have successully Enrolled"
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.paidEnrollment = async (req, res) => {
    try {
        const { courseId } = req.params;

        console.log(courseId)

        const course = await Course.findById({ _id: courseId })


        const user = await User.findByIdAndUpdate({ _id: req.user._id }, { stripeSession: course._id }, { new: true })

        res.json({
            data: user,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}


exports.paymentIntent = async (req, res) => {
    try {
        const { courseId } = req.params

        const course = await Course.findById({ _id: courseId })
        console.log("course===>", course)

        const price = course.price * 100

        const paymentIntents = await stripe.paymentIntents.create({
            description: 'E-learning platform',
            amount: price,         //as 100 =1$
            currency: 'usd',
            payment_method_types: ['card'],
        })
        // console.log("payent intent==>", paymentIntents)


        const user = await User.findByIdAndUpdate({ _id: req.user._id }, { stripPaymentIntent: { paymentIntents } })
        res.send({
            data: user
        })


    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}





exports.userBuy = async (req, res) => {
    try {
        const { userId } = req.params
        if (userId !== req.user._id) return res.sendStatus(400)

        const user = await User.findById({ _id: userId })
        res.json({
            success: true,
            data: user
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERRPR"
        })
    }
}