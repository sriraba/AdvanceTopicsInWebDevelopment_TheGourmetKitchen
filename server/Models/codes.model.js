const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, requird: true },  
  code: { type: String, requird: true }  
});

module.exports = mongoose.model("Codes", userSchema);
