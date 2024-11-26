require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Authentication routes
const authRoutes = require("./routes/auth");

// Role-based access control routes
const roleRoutes = require("./routes/roles");

// Authentication API
app.use("/api/auth", authRoutes);

//// RBAC API
app.use("/api/roles", roleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
