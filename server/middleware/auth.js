const expressJwt = require('express-jwt')
const User = require('../models/user')
const Course = require('../models/course')

exports.requireSignIn = expressJwt({ getToken: (req, res) => { return req.cookies.token }, secret: process.env.JWT_SECRET_KEY, algorithms: ['sha1', 'RS256', 'HS256'] })


exports.checkAuth = async (req, res, next) => {
    try {
        console.log(req.user);
        const { _id } = req.user;
        const user = await User.findById({ _id })
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User Not found"
            })
        }
        req.profile = user
        next()
    } catch (err) {
        res.status(404).json({
            success: false,
            msg: "Authentication failed"
        })
    }
}

exports.checkInstructor = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const user = await User.findById({ _id })
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User Not found"
            })
        }

        if (!user.role.includes("instructor")) {
            return res.status(401).json({
                success: false,
                msg: "This user has not instructor previlages"
            })
        }
        req.profile = user

        next()
    } catch (err) {
        console.log(err)
        res.status(404).json({
            success: false,
            msg: "Authentication failed"
        })
    }

}
exports.checkAdmin = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const user = await User.findById({ _id })
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User Not found"
            })
        }
        if (user.role !== "admin") {
            return res.status(401).json({
                success: false,
                msg: "This user has not admin previlages"
            })
        }
        req.profile = user

        next()
    } catch (err) {
        res.status(404).json({
            success: false,
            msg: "Authentication failed"
        })
    }

}



exports.haveCourse = async (req, res, next) => {
    try {
        const { slug } = req.params
        const user = await User.findById({ _id: req.user._id })
        const course = await Course.findOne({ slug })

        let ids = [];
        let length = user && user.courses && user.courses.length

        for (let i = 0; i < length; i++) {
            ids.push(user.courses[i].toString())
        }

        if (!ids.includes(course._id.toString())) {
            return res.sendStatus(403)
        } else {

            next()
        }

    } catch (err) {
        console.log(err)
    }
}