const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./controller");

const route = express.Router();

route.post("/data", createUser);
route.get("/data", getAllUsers);
route.get("/data/:id", getUserById);
route.put("/data/:id", updateUser);
route.delete("/data/:id", deleteUser);

module.exports = route;
