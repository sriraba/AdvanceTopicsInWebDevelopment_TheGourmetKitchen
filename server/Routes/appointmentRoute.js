const appointmentController = require("../Controllers/appointmentController");
const FeedBack = require("../Models/appointmentModel");
const express = require("express");
const querystring = require("querystring");
const router = express.Router();

router.get("/timeslot", async (req, res) => {
  try {
    console.log(req.query);
    const date = req.query?.date;
    const timeslot = await appointmentController.getAvailableTimeslot(date);
    console.log(timeslot);
    return res.status(200).json({
      message: "Fetched all appointments",
      success: true,
      data: timeslot,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error. Unable to retrieve appointments.",
      success: false,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log(req.query);
    const appointments = await appointmentController.getAppointments();
    console.log(appointments);
    return res.status(200).json({
      message: "Fetched all appointments",
      success: true,
      data: appointments,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error. Unable to retrieve appointments.",
      success: false,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    // TODO: convert incoming json type data to form data
    console.log(req.body);
    const appointments = await appointmentController.createAppointment(req);
    return res.status(200).json({
      message: "Created new appointment",
      success: true,
      data: appointments,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
});

module.exports = router;
