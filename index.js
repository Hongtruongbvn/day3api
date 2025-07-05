const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Test = require("./test.model"); // <-- đường dẫn đúng tới file test.model.js

const mongooseUrl =
  process.env.MONGOOSE || "mongodb://14.225.217.120:27017/day3api";
mongoose
  .connect(mongooseUrl)
  .then(console.log("connected to mongoose"))
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("Hello CI/CD and good ");
});
app.post("/test", async (req, res) => {
  try {
    const newTest = new Test({
      name: req.body.name || "Dữ liệu test",
    });

    const saved = await newTest.save();
    res.status(201).json(saved);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Lỗi khi lưu test document", message: err.message });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
