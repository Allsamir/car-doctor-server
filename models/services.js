const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  service_id: String,
  title: String,
  img: String,
  price: Number,
  description: String,
  facility: [
    {
      name: String,

      details: String,
    },
  ],
});

const Services = mongoose.model("Service", serviceSchema);

module.exports = Services;
