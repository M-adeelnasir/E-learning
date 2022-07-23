const Course = require('../models/course')
const User = require('../models/user')
const LessonComplete = require('../models/lessonComplete')



exports.markAsComplet = async (req, res) => {
    try {
        const { courseId, lessonId } = req.body

        const existing = await LessonComplete.findOne({
            user: req.user._id,
            course: courseId
        })


        if (existing) {
            const update = await LessonComplete.findOneAndUpdate({
                user: req.user._id,
                course: courseId
            }, {
                $addToSet: { lessons: { lessonId } }
            })
            console.log(update)
            res.json({
                success: true
            })

        } else {
            const created = await LessonComplete.create({ user: req.user._id, course: courseId, lessons: lessonId })
            res.json({
                success: true
            })
            console.log(created)
        }




    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "SERVER ERROR"
        })
    }
}