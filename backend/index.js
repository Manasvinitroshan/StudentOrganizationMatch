// import express, { json } from "express";
// import cors from "cors";
//import Clubs from "./config.js"
const express = require("express");
const cors = require("cors");
//const Clubs = require("./config.js");
const app = express();

//app.use(json());
//app.use(cors());

app.get("/message", (req, res) => {
  console.log("Connected to React");
  res.send("Hello World!");
});

// app.post("/addClub", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   //Clubs.doc(req.body.name).set(req.body);
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
