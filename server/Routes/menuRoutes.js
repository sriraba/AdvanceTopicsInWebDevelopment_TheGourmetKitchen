const express = require("express");
const router = express.Router();
const {
  getMenuItems,
  getMenuItemById,
} = require("../Controllers/menuController");

router.get("/", getMenuItems);
router.get("/:id", getMenuItemById);

module.exports = router;
