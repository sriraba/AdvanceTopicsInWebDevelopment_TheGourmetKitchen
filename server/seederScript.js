require("dotenv").config();

const menuData = require("./Data/menuData");
const dbConnection = require("./DBConnection/db");
const menuModel = require("./Models/menuModel");

dbConnection();

const importData = async () => {
  try {
    await menuModel.deleteMany({});
    await menuModel.insertMany(menuData);
    console.log("Data Import Success");
    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();