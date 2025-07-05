// import dotenv
import dotenv from "dotenv";
dotenv.config();

// import mongoose
import mongoose from "mongoose";

// connect to mongodb

// const connectMongo = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("Connected to MongoDB!");
//     } catch (error) {
//         console.log("Error connecting to MongoDB", error);
//     }
// }

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};


export default connectMongo;
