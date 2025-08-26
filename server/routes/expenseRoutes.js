
import express from "express";
import {
    getExpenses,
    addExpense,
    updateExpense,
    deleteExpense,
} from "../controllers/expenseController.js";
const router = express.Router();

router.get("/", getExpenses);
router.post("/", addExpense);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

export default router;
