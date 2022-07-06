const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' })


const app = express();
const PORT = process.env.PORT || 5000
const enviorment = process.env.ENVOIRMENT
if (enviorment === "development") {
    app.use(morgan('dev'))
}
app.use(cors());

const server = app.listen(PORT, () => console.log(`App is listing in ${enviorment} at port ${PORT}`))


process.on('unhandledRejection', (err, promise) => {
    console.log("ERROR ===>", err.message);
    server.close(() => process.exit(1));
})