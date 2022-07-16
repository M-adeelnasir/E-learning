const AWS = require('aws-sdk')
var { nanoid } = require("nanoid");
const User = require('../models/user')
const Course = require('../models/course')
const slugify = require('slugify');
const mongoose = require('mongoose')



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


        const courses = await Course.find({ instructor: _id })

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
        const course = await Course.findOne({ slug })
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