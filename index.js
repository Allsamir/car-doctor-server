require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Car doctor server is running");
});
//
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
