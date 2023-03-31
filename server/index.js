require("dotenv").config();
const express = require("express");
const menuRoutes = require("./Routes/menuRoutes");
const dbConnection = require("./DBConnection/db");
const usersRouter = require('./routes/users.route');

dbConnection();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/menuItems", menuRoutes);

app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
