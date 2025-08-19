import mongoose from "mongoose";


const expenseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        amount: {
            type: Number,
            required: true,
            min: 0,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        description: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true, // adds createdAt & updatedAt
    }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
