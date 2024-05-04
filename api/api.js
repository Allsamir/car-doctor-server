const express = require("express");
const router = express.Router();
const Services = require("../models/services");
const Checkout = require("../models/checkout");
const { default: mongoose } = require("mongoose");

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
router.get("/checkouts", async (req, res) => {
  let qurey = {};
  if (req.query?.email) {
    qurey = { email: req.query.email };
  }
  const checkouts = await Checkout.find(qurey);
  res.json(checkouts);
});

router.post("/checkouts", async (req, res) => {
  const checkOutInfo = req.body;
  const checkOut = new Checkout(checkOutInfo);
  const response = await checkOut.save();
  res.json(response);
});

router.patch("/bookings/:ID", async (req, res) => {
  const id = req.params.ID;
  const updateData = req.body;
  const update = await Checkout.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  console.log(update);
  res.json(update);
});

router.delete("/bookings/:ID", async (req, res) => {
  const id = req.params.ID;
  const deletedItem = await Checkout.findByIdAndDelete(id);
  console.log(deletedItem);
  res.json(deletedItem);
});

module.exports = router;
