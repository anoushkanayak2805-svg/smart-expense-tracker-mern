import { useEffect, useState } from "react";
import API from "./api";
import "./App.css";

// 📊 Chart imports
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  // 🔹 Fetch expenses
  const fetchExpenses = async () => {
    try {
      const res = await API.get("/api/expenses");
      setExpenses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // 🔹 Add / Update expense
  const addExpense = async () => {
    try {
      if (editId) {
        await API.put(`/api/expenses/${editId}`, {
          amount,
          category,
          description,
        });
        setEditId(null);
      } else {
        await API.post("/api/expenses", {
          amount,
          category,
          description,
        });
      }

      setAmount("");
      setCategory("");
      setDescription("");

      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Delete expense
  const deleteExpense = async (id) => {
    try {
      await API.delete(`/api/expenses/${id}`);
      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  // 💰 Total
  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  // 📊 Chart Data
  const categoryData = {};

  expenses.forEach((exp) => {
    const cat = exp.category || "Other";
    categoryData[cat] = (categoryData[cat] || 0) + Number(exp.amount);
  });

  const chartData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(categoryData),
      },
    ],
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h1>Expense Tracker 🚀</h1>

      {/* 💰 TOTAL */}
      <h2>Total: ₹{total}</h2>

      {/* 📊 CHART */}
      {expenses.length > 0 && (
        <div style={{ width: "300px", margin: "20px auto" }}>
          <Pie data={chartData} />
        </div>
      )}

      {/* 🔥 FORM */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Amount"
          value={amount ?? ""}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category ?? ""}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description ?? ""}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <button onClick={addExpense}>
          {editId ? "Update Expense" : "Add Expense"}
        </button>
      </div>

      {/* 🔥 DISPLAY */}
      {expenses.map((exp) => (
        <div
          key={exp._id}
          style={{
            border: "1px solid white",
            margin: "10px",
            padding: "10px",
          }}
        >
          <p><b>₹{exp.amount}</b> - {exp.category}</p>
          <p>{exp.description}</p>

          {/* ✏️ EDIT */}
          <button
            onClick={() => {
              setAmount(exp.amount ?? "");
              setCategory(exp.category ?? "");
              setDescription(exp.description ?? "");
              setEditId(exp._id);
            }}
          >
            Edit
          </button>

          {/* ❌ DELETE */}
          <button onClick={() => deleteExpense(exp._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;