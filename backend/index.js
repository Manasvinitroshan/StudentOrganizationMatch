const axios = require("axios");
const express = require("express");
const cors = require("cors");
const url = require("./config.js");
const app = express();

// Engineering options
var engineering = [
  "Engineering",
  "Biomedical Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Computer Engineering",
  "Aerospace Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Industrial Engineering",
  "Software Engineering",
];

// Common element checker
function haveCommonElement(array1, array2) {
  return array1.some(element => array2.includes(element));
}

// Check if an organization is focused mainly on women
function womanOrganization(organization) {
  organization = organization.toLowerCase();
  if(organization.includes("woman") || organization.includes("women"))
  {
    return true;
  }
  if(organization.includes("ladies") || organization.includes("lady"))
  {
    return true;
  }
  if(organization.includes("girl"))
  {
    return true;
  }
  return false;
}

// Trial function
app.get("/message", (req, res) => {
  console.log("Connected to React");
  const sample = [{"message": "Hello World", "name": "John Doe" }, {"message": "Hello Again", "name": "Joe Mama" }];
  res.send(sample[1]["message"] + ". This is " + sample[1]["name"]);
});

// Trial function
app.get("/firebase", async (req, res) => {
  console.log("Connected to React");
  const response = await axios.get(url + "/tryThis");
  //console.log(url);
  res.send(response.data);
  console.log(url);
});

// Trial function
app.get("/club", async (req, res) => {
  console.log("Connected to React");
  const response = await axios.get(url + "/getAllData");
  console.log(response.data);
  //res.send("Name: " + response.data[2]["Title"] + "\nMission: " + response.data[2]["Mission"]);
  //res.send(response.data);
  res.send(response.data[1]["Title"]);
});

// Function to get all clubs and check with clubs best match with users' interests and choices
app.get("/clubs", async (req, res) => {

  // Get the students' responses
  let options = req.query.options;
  let gender = req.query.gender;

  // Get all clubs from the Firestore database
  const response = await axios.get(url + "/getClubs");

  // Make sure options is an array type
  if(typeof req.query.options === "string") {
    options = req.query.options.split(",");
  }

  // Check if the user wants to see all engineering clubs if choosing any engineering type
  if(options.indexOf("Engineering (Any Type)") !== -1)
  {
    options = options.concat(engineering);
  }

  // Get the organizations and descriptions that would be recommended to the users
  let result = "";
  for (let i = 0; i < response.data.length; i++) {
    let categories = response.data[i]["Category"].split(", ");

    // Check if the organization has any common interests with the user
    if(haveCommonElement(categories, options))
    {
      var org = response.data[i]["Title"] + ": " + response.data[i]["Mission"] + "\n";
      // Only provide a woman-focused organization if the user is not a male
      if(womanOrganization(org) && gender === "Male")
        continue;
      result += response.data[i]["Title"] + ": " + response.data[i]["Mission"] + "\n";
    }
  }

  // Send the results to the frontend
  res.send(result);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
