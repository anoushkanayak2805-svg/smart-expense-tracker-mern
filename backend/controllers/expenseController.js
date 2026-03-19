const Expense = require("../models/Expense");

// ➕ ADD EXPENSE

const addExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;

    console.log("Incoming Data:", req.body); // 👈 debug

    const expense = new Expense({
      amount,
      category,
      description,
    });

    const savedExpense = await expense.save();

    res.status(201).json(savedExpense);
  } catch (error) {
    console.error("ERROR in addExpense:", error); // 👈 IMPORTANT
    res.status(500).json({ message: "Server Error" });
  }
};

// 📄 GET ALL EXPENSES
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    console.error("ERROR in getExpenses:", error); // 👈 VERY IMPORTANT
    res.status(500).json({ message: "Server Error" });
  }
};

// ✏️ UPDATE EXPENSE
const updateExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      {
        amount,
        category,
        description,
        title: category || "General", // ✅ FIX
      },
      { new: true }
    );

    res.json(updatedExpense);
  } catch (error) {
    console.error("❌ ERROR in updateExpense:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
// ❌ DELETE EXPENSE

const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    await expense.deleteOne();

    res.json({ message: "Expense removed" });
  } catch (error) {
    console.error("❌ ERROR in deleteExpense:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// 📊 SUMMARY
const getExpenseSummary = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });

    let totalExpense = 0;
    let categorySummary = {};
    let highestExpense = null;

    expenses.forEach((exp) => {
      totalExpense += exp.amount;

      categorySummary[exp.category] =
        (categorySummary[exp.category] || 0) + exp.amount;

      if (!highestExpense || exp.amount > highestExpense.amount) {
        highestExpense = exp;
      }
    });

    res.json({
      totalExpense,
      categorySummary,
      highestExpense,
    });
  } catch (error) {
    res.status(500).json({ message: "Error generating summary" });
  }
};

module.exports = {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getExpenseSummary,
};