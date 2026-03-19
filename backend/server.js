const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');   // ✅ added

// Load environment variables
dotenv.config();

const app = express();

app.use(cors());   // ✅ added

// Connect MongoDB
connectDB();

// Middleware to read JSON
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

const expenseRoutes = require('./routes/expenseRoutes');
app.use('/api/expenses', expenseRoutes);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});