import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connect: ${connect.connection.host}`)
    } catch (error) {
        console.log(`MongoDB connect error: ${error}`)
        process.exit(1)
    }
}