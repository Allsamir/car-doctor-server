const express = require("express");
const router = express.Router();
const Services = require("../models/services");
const Checkout = require("../models/checkout");

//Services
router.get("/services", async (req, res) => {
  const services = await Services.find({});
  res.json(services);
});
router.get("/services/:ID", async (req, res) => {
  const id = req.params.ID;
  const service = await Services.findById(id, "title price service_id");
  res.json(service);
});

// Checkouts
router.post("/checkouts", async (req, res) => {
  const checkOutInfo = req.body;
  const checkOut = new Checkout(checkOutInfo);
  const response = await checkOut.save();
  res.json(response);
});

module.exports = router;
