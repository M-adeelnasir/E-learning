
const User = require('../models/user');


exports.create = async (req, res) => {
    try {
        const { name, password, email } = req.body;

        if (!name || !password || !email) {
            return res.status(401).json({
                success: false,
                msg: "All fields are required"
            })
        }

        if (password.length < 6) {
            return res.status(401).json({
                success: false,
                msg: "Password should more then 6 chars"
            })
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(401).json({
                success: false,
                msg: "Account already exists"
            })

        }

        const user = await User.create({ name, email, password })

        res.json({
            success: true,
            data: user
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            msg: "SERVER ERROR"
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { password, email } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "Invalid Credentials"
            })
        }

        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return res.status(404).json({
                success: false,
                msg: "Invalid Credentials"
            })
        }
        if (isMatch) {
            res.json({
                success: true,
                data: { name: user.name, email: user.email, role: user.email, _id: user._id },
                msg: "Logged In"
            })
        }


    } catch (err) {

        res.status(500).json({
            success: false,
            msg: "SERVER ERROR"
        })
    }
}
