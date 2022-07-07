const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const fs = require('fs');
const routes = fs.readdirSync('./routes')

dotenv.config({ path: './config/config.env' })


const app = express();
const PORT = process.env.PORT || 5000
const enviorment = process.env.ENVOIRMENT

connectDB()

if (enviorment === "development") {
    app.use(morgan('dev'))
}
app.use(cors());
app.use(express.json())

routes.map(r => app.use('/api/v1', require('./routes/' + r)))


const server = app.listen(PORT, () => console.log(`App is listing in ${enviorment} at port ${PORT}`))


process.on('unhandledRejection', (err, promise) => {
    console.log("ERROR ===>", err.message);
    server.close(() => process.exit(1));
})