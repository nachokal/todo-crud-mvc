const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECTION, { dbName: 'todos' })
        console.log(`Connected to mongodb cluster ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB

