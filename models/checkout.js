const mongoose = require("mongoose");

const checkOutSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  date: String,
  price: String,
  serviceName: String,
  serviceID: String,
  img: String,
  status: String,
});

const Checkout = mongoose.model("Checkout", checkOutSchema);

module.exports = Checkout;
