// routes/expenseRoutes.js
import express from "express";
import {
    getExpenses,
    addExpense,
    updateExpense,
    deleteExpense,
} from "../controllers/expenseController.js"; // 👈 add .js extension

const router = express.Router();

router.get("/", getExpenses);
router.post("/", addExpense);
router.put("/:id", updateExpense);   // Edit route
router.delete("/:id", deleteExpense);

export default router; // 👈 ESM export
