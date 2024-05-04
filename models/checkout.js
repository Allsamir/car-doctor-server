const mongoose = require("mongoose");

const checkOutSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  date: String,
  serviceID: String,
});

const Checkout = mongoose.model("Checkout", checkOutSchema);

module.exports = Checkout;
