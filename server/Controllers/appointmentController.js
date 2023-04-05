const { request } = require("express");
const appointment = require("../Models/appointmentModel");
const email = require("../Utils/email");

const createAppointment = async (req) => {
  try {
    // frontend needs to provide to date in format YYYY-MM-DD
    const timing = +req.body.time;
    const date = new Date(req.body?.date);
    console.log(date);
    const appointments = await appointment.find({ date: date, time: timing });
    console.log(appointments);
    if (appointments.length > 0) {
      throw new Error("Appointment Already Exists");
    } else {
      req.body.date = date;
      const data = await appointment.create(req.body);
      const message = `You have successfully created an appointment on ${data?.date} at ${data?.time}`;
      const subject = "Appointment Created";
      email.sendEmail(data.email, subject, message);
      return data;
    }
  } catch (error) {
    throw error;
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await appointment.find();
    return appointments;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAvailableTimeslot = async (date) => {
  try {
    console.log(date);
    // TODO: write appropriate query for matching date
    const c = await appointment.find({ date: new Date(date) });
    const timeslot = [];
    c.forEach((element) => {
      timeslot.push(element.time);
    });

    // TODO: loop through all the appointments and extract time fields convert into array and return it
    return { availableTimeslot: timeslot };
  } catch (error) {
    console.log(error);
    return error;
    c;
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  getAvailableTimeslot,
};
