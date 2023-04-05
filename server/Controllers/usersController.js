// Author: Created By: Sri Ramya Basam
const Users1 = require('../Models/usersModel');
const Codes1 = require('../Models/codesModel');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sriramyabasam0044@gmail.com',
    pass: 'gxieaxqzsicdnzoe'
  }
});



const getUsers = async (request, response) => {
  try {
    const Users = await Users1.find();
    response.json(Users);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const validUser = async (request, response) => {
  const user = {
    email: request.body.email,
    password: request.body.password
  };
  console.log(user);

  try {
    const Users = await Users1.find();
    const userFiltered = Users.filter((item) => item.email == user.email);
    console.log(userFiltered);
    console.log(userFiltered.length===0)

    if (userFiltered.length===0) {
      return response.status(400).json({ error:"yes", message: 'User not found' });
    }
    if (userFiltered[0].email === user.email && userFiltered[0].password === user.password) {
      return response.status(200).json({  error:"no", message: 'Login Success' });
    } else {
      return response.status(400).json({  error:"yes", message: 'Password Incorrect'});
    }
  } catch (err) {
    response.status(500).json({  error:"yes", message: err.message });
  }
};

const getUserById = async (request, response) => {
  const { id } = request.params;

  try {
    const user = await Users1.findById(id);
    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }
    response.json(user);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const getUserByEmail = async (request, response) => {
  const { email } = request.params;

  try {
    const Users = await Users1.find();
    const userFiltered = Users.filter((item) => item.email === email);
    if (userFiltered.length===0) {
      return response.status(404).json({ message: 'User not found' });
    }
    const id = userFiltered[0]._id;

    const user = await Users1.findById(id);
    if (!user) {
      return response.status(404).json({ message: 'User not found 1' });
    }
    response.json(user);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const deleteUser = async (request, response) => {
  const { email } = request.body.email;
  console.log(request.body.email);

  try {
  Users1.deleteMany({email: request.body.email}).then((result) => {
    response.status(200).json({
        message: "User deleted",
      })
    });
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: err.message });
  }
};

const updateUser = async (request, response) => {
  // const { email } = request.params;
  const updates = {
    email: request.body.email,
    password: request.body.password
  };
  try {
    Users1.findOneAndUpdate({email: request.body.email}, {$set: {
      password: request.body.password
    }},
    {returnDocument : 'after'}
  ).then((result) => {
    response.status(200).json({
        message: "Data added",
      })
    });
    console.log(request.body.email);    
  } catch (err) {
    console.log(err);
    response.status(400).json({ message: err.message });
  }
};

const updateUserProfile = async (request, response) => {
  // const { email } = request.params;
  const updates = {
    email: request.body.email,
    firstname: request.body.firstname
  };
  try {
    Users1.findOneAndUpdate({email: request.body.email}, {$set: {
      firstname: request.body.firstname, lastname: request.body.lastname
    }},
    {returnDocument : 'after'}
  ).then((result) => {
    response.status(200).json({
        message: "Data added",
      })
    });
    console.log(request.body.email);    
  } catch (err) {
    console.log(err);
    response.status(400).json({ message: err.message });
  }
};

const validCode = async (request, response) => {
  const user = {
    email: request.body.email,
    code: request.body.code
  };
  console.log(user);
  var isValidCode = "no";

  try {
    const Users = await Codes1.find();
    const userFiltered = Users.filter((item) => item.email == user.email);
    console.log(userFiltered);
    console.log(userFiltered.length===0)

    if (userFiltered.length===0) {
      return response.status(400).json({ error:"yes", message: 'User not found' });
    }
    for(const userFilter of userFiltered){
      if (userFilter.email === user.email && userFilter.code === user.code) {
        isValidCode="yes";
      } 
    }

    if (isValidCode === "yes") {
      return response.status(200).json({  error:"no", message: 'Valid Code' });
    } else {
      return response.status(400).json({  error:"yes", message: 'Incorrect Code'});
    }
  } catch (err) {
    console.log(err)
    response.status(500).json({  error:"yes", message: err.message });
  }
};

const sendEmail = async (request, response) => {
  const { email } = request.body;
  console.log(email);
  const Users = await Users1.find();
  const userFiltered = Users.filter((item) => item.email === email);
    if (userFiltered.length===0) {
      return response.status(404).json({ message: 'User not found' });
    }

  const max = 9999;
  const min = 99;
  const code = Math.floor(Math.random() * (max - min + 1) + min)
  console.log(code);
  const verifycode = new Codes1({ email, code});
  var mailOptions = {
    from: 'sriramyabasam0044@gmail.com',
    to: email,
    subject: 'Gaurmet Service - Your one time verification code',
    text: code.toString()
  };  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      response.status(200).json({message :error});
    } else {
      console.log('Email sent: ' + info.response);

      
//       const query = { email: email, code: code };
// const update = { $set: { email: email, code:code }};
// const options = { upsert: true };
// Codes1.updateOne(query, update, options);

      // Codes1.findOneAndUpdate({email: email, code: code}, result, { upsert: true }, (err, results) => {
      //   console.log(err)
      //   response.status(200).json({message: "email sent"});
      // })
      
      verifycode.save();
      response.status(200).json({message: "email sent"});
    }
  });
};

const createUser = async (request, response) => {
  const { email, password, firstname, lastname } = request.body;
  console.log(request.body  )
  const user = new Users1({ email, password, firstname, lastname });
  console.log(user)
  try {
    await user.save();
    response.status(201).json(user);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

const getUserNameFromEmail = async (emailId) => {
  return await Users1.find({email : emailId});
}
module.exports = {
  validUser,
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  getUserNameFromEmail,
  deleteUser,
  updateUser,
  sendEmail,
  validCode,
  updateUserProfile
};