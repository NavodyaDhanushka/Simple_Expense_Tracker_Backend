import mongoose from "mongoose";


const expenseSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        amount: { type: Number, required: true, min: 0 },
        category: { type: String, required: true },
        description: { type: String, default: "" },
        date: { type: Date, required: true },
    },
    { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
