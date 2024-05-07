const express = require("express");
const db = require("./config");
const dotenv = require("dotenv");
const route = require("./route");
const app = express();
dotenv.config();

app.use(express.json());

app.use("/", route);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
