
require('dotenv').config()

export default {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI_PROD,
    corsOrigin: process.env.CORS_ORIGIN
}