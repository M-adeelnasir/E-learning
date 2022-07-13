const User = require('../models/user')
const stripe = require('stripe')(process.env.STRIP_SERCRET_KEY)
const queryString = require('query-string')


exports.makeInstructor = async (req, res) => {
    try {
        //1)  find the use in db
        const { _id } = req.user;
        const user = await User.findById({ _id })
        if (!user) {
            return res.status(404).json({
                msg: "No user Found"
            })
        }
        console.log(user)


        //2) check idf user have already stripe_account_id in db
        if (!user.stripe_account_id) {
            const account = await stripe.accounts.create({
                type: 'express'

            })
            // console.log(account)
            user.stripe_account_id = account.id
            user.save()
        }


        //2) create account link on base account id (for complete strip onboarding)
        let accountLink = await stripe.accountLinks.create({
            account: user.stripe_account_id,
            refresh_url: process.env.STRIPE_REDIRECT_URL,
            return_url: process.env.STRIPE_REDIRECT_URL,
            type: "account_onboarding",
        })
        console.log(accountLink)


        // 3) pre fillt he email on frontend
        accountLink = Object.assign(accountLink, {
            "stripe_user[email]": user.email
        })

        // 4) send the account link as resonse to frontend
        res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`)

    } catch (err) {
        console.log(err.message);
    }
}


exports.currentInstructor = async (req, res) => {
    try {
        const { _id } = req.user;
        const user = await User.findById({ _id })
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
        console.log(err);
        res.status(500).json({
            success: false,
            msg: "SERVER ERROR"
        })
    }
}