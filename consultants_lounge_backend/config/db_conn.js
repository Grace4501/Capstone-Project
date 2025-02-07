import dotenv from 'dotenv'
import mongoose from "mongoose"

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('...\nMongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

