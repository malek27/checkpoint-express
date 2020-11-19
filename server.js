const express = require("express");
const app = express();
const path = require("path");
const workingTime = require("./middleware/workingTime.js");

app.use(express.json());

const port = 5000;

app.use(workingTime);

app.use(express.static("public"));

app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port ${port}..`);
});
