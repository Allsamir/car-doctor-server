require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const api = require("./api/api");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://doctor-car-01.web.app",
      "https://doctor-car-01.firebaseapp.com",
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

app.use(api);

app.get("/", (req, res) => {
  res.send("Car doctor server is running");
});
//
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
