
require('dotenv').config()

export default {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    corsOrigin: process.env.CORS_ORIGIN
}