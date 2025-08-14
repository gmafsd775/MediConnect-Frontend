const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  symptoms: {
    type: [String],
    default: [],
  },
  contact: {
    phone: String,
    email: String,
  },
  address: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Patient", patientSchema);
