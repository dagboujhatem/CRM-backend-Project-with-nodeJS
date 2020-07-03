const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: String,
});

module.exports = mongoose.model("User", user);