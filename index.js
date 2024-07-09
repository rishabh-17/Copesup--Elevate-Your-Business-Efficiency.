const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const redis = require("redis");
const authRoutes = require("./routes/auth");
const controlPanelRoutes = require("./routes/controlPanel");
const adminRoutes = require("./routes/admin");
const employeeRoutes = require("./routes/employee");

const app = express();
const PORT = 5000;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/controlpanel", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Redis client
const redisClient = redis.createClient();
redisClient.on("error", (err) => {
  console.log("Redis error: ", err);
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/control-panel", controlPanelRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/employee", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
