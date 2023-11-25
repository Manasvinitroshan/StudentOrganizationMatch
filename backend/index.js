// import express, { json } from "express";
// import cors from "cors";
//import Clubs from "./config.js"
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const url = require("./config.js");
const app = express();

//app.use(json());
//app.use(cors());

app.get("/message", (req, res) => {
  console.log("Connected to React");
  res.send("Hello World!");
});

app.get("/firebase", async (req, res) => {
  console.log("Connected to React");
  const response = await axios.get(url + "/tryThis");
  //console.log(url);
  res.send(response.data);
  console.log(url);
});

// app.post("/addClub", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   //Clubs.doc(req.body.name).set(req.body);
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
