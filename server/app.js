// app.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";   // 👈 add .js extension when using ESM
import expenseRoutes from "./routes/expenseRoutes.js"; // 👈 import routes

// Load env vars
dotenv.config();

// Connect DB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
