const Mongoose = require("mongoose");

const appointmentSchema = new Mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      format: "MM/DD/YYYY",
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    autoCreate: true,
  }
);

const Appointment = Mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
