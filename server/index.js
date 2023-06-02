const express = require("express");
// const routes = require("./routes/authRoutes.js");
// const connect = require("./database/mongodb.js");
const app = express();

app.use(express.json());
//accept body
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

const  PORT = 1333;

// app.use("/api/v1", routes)
// connect();

app.listen(PORT, () => {
  console.log('runnig', PORT)
})