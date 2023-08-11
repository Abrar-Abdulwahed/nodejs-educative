const express = require("express");
// import { Express } from "express";
const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});