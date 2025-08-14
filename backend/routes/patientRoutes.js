// routes/patientRoutes.js

const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// @route   POST /api/patients/add
// @desc    Add a new patient
// @access  Public
router.post('/add', addPatient);

  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    console.error("❌ Error adding patient:", error.message);
    res.status(400).json({ message: "Failed to add patient", error: error.message });
  }
;

module.exports = router;
