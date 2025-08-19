// db.js
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log("====================================");
        console.log("✅ MongoDB Connection Established");
        console.log(`📡 Host: ${conn.connection.host}`);
        console.log(`📂 Database: ${conn.connection.name}`);
        console.log("====================================");
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1); // Stop the server if DB connection fails
    }
};

export default connectDB;
