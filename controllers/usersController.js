const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Get users success",
      data: users
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Get users failed",
      data: error
    })
  }
};

const saveUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "Save user success",
      data: savedUser
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Save user failed",
    })
  }
};

const updateUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(userID, req.body, { new: true });
    res.status(200).json({
      message: "Update user success",
      data: updatedUser
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Update user failed",
      data: error
    })
  }

};

const deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userID);
    res.status(200).json({
      message: "Delete user success",
      data: deletedUser
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Delete user failed",
      data: error
    })
  }
}

module.exports = {
  getUsers,
  saveUser,
  updateUser,
  deleteUser
}