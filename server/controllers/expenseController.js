
import Expense from "../models/Expense.js";

export const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export const addExpense = async (req, res) => {
    try {
        const { title, amount, category, description, date } = req.body;

        const newExpense = new Expense({
            title,
            amount,
            category,
            description,
            date,
        });

        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(400).json({ message: "Invalid data", error: error.message });
    }
};


export const updateExpense = async (req, res) => {
    try {
        const { title, amount, category, description, date } = req.body;

        const updatedExpense = await Expense.findByIdAndUpdate(
            req.params.id,
            { title, amount, category, description, date },
            { new: true, runValidators: true }
        );

        if (!updatedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(400).json({ message: "Error updating expense", error: error.message });
    }
};

export const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);

        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        await expense.deleteOne();
        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
