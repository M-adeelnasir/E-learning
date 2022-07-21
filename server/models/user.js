const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { ObjectId } = mongoose.Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        min: 6
    },
    resetPasswordLink: {
        type: String,
        default: ''
    },
    role: {
        type: [String],
        default: ["subscriber"],
        enum: ["subscriber", "instructor", "admin"]
    },
    picture: {
        type: String,
        default: "/avater.png"
    },
    courses: [{
        type: ObjectId,
        ref: 'Course'
    }],
    stripe_account_id: {},
    stripe_seller: {},
    stripeSession: {}
}, { timestamps: true })



userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) { next() }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})


userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY,
        { expiresIn: '3d' }
    )
}

module.exports = mongoose.model("User", userSchema);
