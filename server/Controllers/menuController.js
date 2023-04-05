const Menu = require("../Models/menuModel");

const getMenuItems = async (req, res) => {
  try {
    const items = await Menu.find({});
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getMenuItemById = async (req, res) => {
  try {
    const item = await Menu.findById(req.params.id);

    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getMenuItems,
  getMenuItemById,
};
