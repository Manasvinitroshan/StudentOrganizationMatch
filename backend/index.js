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

function haveCommonElement(array1, array2) {
  return array1.some(element => array2.includes(element));
}

app.get("/message", (req, res) => {
  console.log("Connected to React");
  const sample = [{"message": "Hello World", "name": "John Doe" }, {"message": "Hello Again", "name": "Joe Mama" }];
  res.send(sample[1]["message"] + ". This is " + sample[1]["name"]);
});

app.get("/firebase", async (req, res) => {
  console.log("Connected to React");
  const response = await axios.get(url + "/tryThis");
  //console.log(url);
  res.send(response.data);
  console.log(url);
});

app.get("/clubs", async (req, res) => {
  console.log("Connected to React");
  const response = await axios.get(url + "/getAllData");
  console.log(response.data);
  //res.send("Name: " + response.data[2]["Title"] + "\nMission: " + response.data[2]["Mission"]);
  //res.send(response.data);
  res.send(response.data[1]["Title"]);
});

app.get("/trial", async (req, res) => {
  console.log("Connected to React");
  let options = req.query.options;
  const response = await axios.get(url + "/getUsers");
  if(typeof req.query.options === "string") {
    console.log("True");
    options = req.query.options.split(",");
  }
  console.log(options);
  let result = "";
  for (let i = 0; i < response.data.length; i++) {
    let categories = response.data[i]["Category"].split(",");
    if(haveCommonElement(categories, options))
    {
      result += response.data[i]["Title"] + ": " + response.data[i]["Mission"] + "\n\n";
    }
  }
  //res.send("Name: " + response.data[0]["Title"] + "\nMission: " + response.data[0]["Mission"]);
  res.send(result);
  //console.log(response.data);
  //res.send(response.data[1]["Title"]);
});

// app.post("/addClub", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   //Clubs.doc(req.body.name).set(req.body);
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
