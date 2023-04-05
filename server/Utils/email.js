// Author: Created By: Sri Ramya Basam
// Title: Send OTP through email from sriramyabasam0044@gmail.com
// Availability: https://www.w3schools.com/nodejs/nodejs_email.asp

const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sriramyabasam0044@gmail.com",
    pass: "gxieaxqzsicdnzoe",
  },
});

const sendEmail = async (email, subject, description) => {
  var mailOptions = {
    from: "sriramyabasam0044@gmail.com",
    to: email,
    subject: subject,
    text: description,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

exports.sendEmail = sendEmail;
