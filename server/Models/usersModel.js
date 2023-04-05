// Author: Created By: Sri Ramya Basam
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, requird: true },
  firstname: { type: String, requird: true },
  lastname: { type: String, requird: true },
  password: { type: String, requird: true },
});

module.exports = mongoose.model("Users", userSchema);
