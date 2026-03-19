const express = require("express");

const { 
  addExpense, 
  getExpenses, 
  updateExpense,
  deleteExpense,
  getExpenseSummary,
} = require("../controllers/expenseController");

// ✅ IMPORTANT: Use destructuring here
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// ➕ Add Expense
router.post("/", addExpense);

// 📄 Get All Expenses
router.get("/", getExpenses);

// ✏️ Update Expense
router.put("/:id", updateExpense);

// ❌ Delete Expense
router.delete("/:id", deleteExpense);

// 📊 Expense Summary
router.get("/summary", protect, getExpenseSummary);

module.exports = router;