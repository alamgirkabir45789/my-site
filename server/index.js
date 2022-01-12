const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 5002;
console.log(port);
//module import
// const User = require("./models/user.model");

const User = require("./models/user.model");
console.log(User);

//config
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//Database Connection
mongoose.connect("mongodb://localhost:27017/my-app-mongoDB");

//read route
app.get("/user", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

//create route
app.post("/newUser", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  console.log(newUser);
  newUser
    .save()
    .then((user) => console.log(user))
    .catch((err) => res.status(400).json("Error" + err));
});

//Update Route
app.put("/update/:id", (req, res) => {
  const updateUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  console.log(updateUser);

  User.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: updateUser },
    (req, res, err) => {
      if (!err) {
        console.log("Item updated");
      } else {
        console.log(err);
      }
    }
  );
});

//Delete Route
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  User.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("User Deleted");
    } else {
      console.log(err);
    }
  });
});

//Server
app.listen(port, () => {
  console.log("Server is running on:" + port);
});
