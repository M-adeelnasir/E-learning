const AWS = require('aws-sdk')
var { nanoid } = require("nanoid");





exports.uploadImage = async (req, res) => {

    try {

        const s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION
        });

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
            Key: `${nanoid()}.${type}`,  //kjsdcbuow.jpeg
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
            }))
    })


} catch (err) {
    console.log(err);

}

}