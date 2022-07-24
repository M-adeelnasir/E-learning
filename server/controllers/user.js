
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const AWS = require('aws-sdk')
const _ = require('lodash');

exports.create = async (req, res) => {
    try {
        const { name, password, email } = req.body;

        if (!name || !password || !email) {
            return res.status(400).json({
                success: false,
                msg: "All fields are required"
            })
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                msg: "Password should more then 6 chars"
            })
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({
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
            sendToken(res, 200, user)
        }


    } catch (err) {

        res.status(500).json({
            success: false,
            msg: "SERVER ERROR"
        })
    }
}




exports.logout = async (req, res) => {
    try {
        res.clearCookie("token")
        // console.log("user removed from cookies");
        return res.json({
            success: true,
            msg: "logout"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "SERVER ERROR"
        })
    }
}


//send token
const sendToken = async (res, statusCode, user) => {
    const token = await user.getJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_TOKEN_COOKIE_EXPIRES * 24 * 12 * 60 * 1000),
        httpOnly: true
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        data: { name: user.name, email: user.email, role: user.role, _id: user._id, token: token },
        msg: "Logged In"
    })
}


exports.currentUser = async (req, res) => {
    try {
        const { _id } = req.user;
        const user = await User.findById({ _id }).select("-password")
        if (!user) {
            return res.status(404).json({
                msg: "No user Found"
            })
        }
        res.json({
            success: true,
            data: user
        })

    } catch (err) {
        // console.log("ERROR==>", err);
        res.status(500).json({
            success: false,
            msg: "Server error"
        })
    }
}

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;


    try {
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION
        });


        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: `No user found with ${email} Email`
            })
        }


        const token = jwt.sign({ name: user.name }, process.env.JWT_SECRET_KEY, { expiresIn: '20m' })
        const resetLink = `${process.env.CLIENT_URL}/auth/password/reset/${token}`

        user.updateOne({ resetPasswordLink: token }).exec((err, success) => {
            if (err) {
                return res.status(404).json({
                    success: false,
                    msg: "Reset passoward Failed"
                })
            }

            var params = {
                Destination: {
                    ToAddresses: [
                        user.email
                    ]
                },
                Message: { /* required */
                    Body: { /* required */
                        Html: {
                            Charset: "UTF-8",
                            Data: `<h2>Hey! ${user.name}</h2>
                            <p>Click the following link to reset your password</p>
                            <p>${resetLink}</p>
                            `
                        }
                    },
                    Subject: {
                        Charset: 'UTF-8',
                        Data: 'Follow the link to reset your passord'
                    }
                },
                Source: process.env.EMAIL_FROM, /* required */
                ReplyToAddresses: [
                    process.env.EMAIL_TO
                ],
            };


            var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
            sendPromise.then((data) => {
                // console.log(data);
                res.json({
                    Success: true,
                    token: token,
                    msg: `Email has been sent to ${user.email}`
                })
            }).catch((err) => {
                console.log(err);
                res.status(400).json({
                    success: false,
                    msg: "Email sent failed try again with a Valid email"
                })
            })
        })


    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "SERVER ERROR"
        })
    }
}


exports.resetPassword = async (req, res) => {
    try {
        const { confirmPassword, newPassword } = req.body;
        const { resetToken } = req.params
        if (!confirmPassword || !newPassword) {
            return res.status(400).json({
                success: false,
                msg: "Password should not be empty"
            })
        }
        if (confirmPassword !== newPassword) {
            return res.status(400).json({
                success: false,
                msg: "Password does not match"
            })
        }

        if (!resetToken) {
            return res.status(400).json({
                success: false,
                msg: "No link found"
            })
        }
        // console.log(resetToken);

        try {

            const token = jwt.verify(resetToken, process.env.JWT_SECRET_KEY)
        } catch (err) {

            res.status(400).json({
                success: false,
                msg: "Expired or invalid token"
            })
        }

        let user = await User.findOne({ resetPasswordLink: resetToken })
        if (!user) {
            console.log("sss");
            return res.status(400).json({
                success: false,
                msg: "Invalid or expired Link"
            })
        }

        const updateFields = {
            resetPasswordLink: "",
            password: newPassword
        }

        user = _.extend(user, updateFields)
        user.save((err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    success: false,
                    msg: "Reset password Faild, try later"
                })
            }

            return res.status(200).json({
                success: true,
                msg: "Password Updated Successfully",
            })
        })

    } catch (err) {
        console.log(err);
        return res.status(400).json({
            success: false,
            msg: "Reset password Faild, try later"
        })
    }
}
