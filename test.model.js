// test.model.js
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Test = mongoose.model("Test", testSchema);
module.exports = Test;
