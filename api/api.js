require("dotenv").config();
const express = require("express");
const router = express.Router();
const Services = require("../models/services");
const jwt = require("jsonwebtoken");
const Checkout = require("../models/checkout");
const verifyToken = require("../middlewares/verifyToken");

//Services
router.get("/services", async (req, res) => {
  const services = await Services.find({});
  res.json(services);
});
router.get("/services/:ID", async (req, res) => {
  const id = req.params.ID;
  const service = await Services.findById(id, "title price service_id img");
  res.json(service);
});

// Checkouts
router.get("/checkouts", verifyToken, async (req, res) => {
  let qurey = {};
  if (req.query?.email) {
    qurey = { email: req.query.email };
  }
  console.log(req.cookies.accessToken);
  const checkouts = await Checkout.find(qurey);
  res.json(checkouts);
});

router.post("/checkouts", async (req, res) => {
  const checkOutInfo = req.body;
  const checkOut = new Checkout(checkOutInfo);
  const response = await checkOut.save();
  res.json(response);
});
// Bookings
router.patch("/bookings/:ID", async (req, res) => {
  const id = req.params.ID;
  const updateData = req.body;
  const update = await Checkout.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  res.json(update);
});

router.delete("/bookings/:ID", async (req, res) => {
  const id = req.params.ID;
  const deletedItem = await Checkout.findByIdAndDelete(id);
  console.log(deletedItem);
  res.json(deletedItem);
});

// auth related api

router.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res
    .cookie("accessToken", token, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    })
    .send({ success: true });
});

module.exports = router;
