require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const menuRoutes = require("./Routes/menuRoutes");
const dbConnection = require("./DBConnection/db");
const usersRouter = require("./Routes/usersRoute");
const feedRoute = require("./Routes/feedRoute");
const appointmentRouter = require("./Routes/appointmentRoute");

const cors = require("cors");

dbConnection();

const app = express();

app.use(express.json());
const corsOptions = {
  origin: "*",
  methods: "GET, POST, PATCH, PUT, DELETE",
  optionsSuccessStatus: 204,
};
// app.use(corsOptions);
app.use(cors(corsOptions));

// Add the body-parser middleware to parse incoming request bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/menuItems", menuRoutes);
app.use("/api/feedback", feedRoute);
app.use("/api/users", usersRouter);
app.use("/api/appointment", appointmentRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
