const express = require("express");
const router = express.Router();
const Services = require("../models/services");
router.get("/services", async (req, res) => {
  const services = await Services.find({});
  res.json(services);
});

module.exports = router;
