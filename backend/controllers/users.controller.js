const Users1 = require('../models/users.model');

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

  try {
    const Users = await Users1.find();
    const userFiltered = Users.filter((item) => item.email == user.email);
    console.log(userFiltered);
    console.log(userFiltered.length===0)

    if (userFiltered.length===0) {
      return response.status(404).json({ message: 'User not found' });
    }
    if (userFiltered[0].email === user.email && userFiltered[0].password === user.password) {
      return response.status(200).json({ message: 'Login Success', type: userFiltered[0].type });
    } else {
      return response.status(404).json({ message: 'Password Incorrect'});
    }
  } catch (err) {
    response.status(500).json({ message: err.message });
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
  const { id } = request.params;

  try {
    const deletedUser = await Users1.findByIdAndDelete(id);
    if (!deletedUser) {
      return response.status(404).json({ message: "User not found" });
    }
    response.json(deletedUser);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const updateUser = async (request, response) => {
  // const { email } = request.params;
  const updates = {
    email: request.body.email,
    password: request.body.password,
    type: request.body.type,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    
    phone: request.body.phone,
    skills: request.body.skills,
    experience: request.body.experience,
    education: request.body.education
  };

  try {
    console.log(request.body.email);
    const Users = await Users1.find();
    const userFiltered = Users.filter((item) => item.email == request.body.email);
    console.log(userFiltered);
    console.log(userFiltered.length);
    console.log(userFiltered.length===0);
    console.log(userFiltered.length==="0");
    console.log(userFiltered.length==0);
    console.log(userFiltered.length=="0");
    if (userFiltered.length===0) {
      return response.status(404).json({ message: 'User not found' });
    }
    const id = userFiltered[0]._id;
    console.log(id);

    const User = await Users1.findByIdAndUpdate(id, updates, { new: true });
    console.log(User)
    if (!User) {
      return response.status(404).json({ message: "User not found 1" });
    }
    response.json(User);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = {
  validUser,
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  deleteUser,
  updateUser
};