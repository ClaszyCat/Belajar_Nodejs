var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
var user = require("../model/user.js");

app.get("/api/user/:userid", function (req, res) {
  var id = req.params.userid;
  user.getUser(id, function (err, result) {
    if (!err) {
      res.send(result);
    } else {
      res.status(500).send("error");
    }
  });
});

app.get("/api/user/", function (req, res) {
  user.getUsers(function (err, result) {
    if (!err) {
      res.send(result);
    } else {
      res.status(500).send("error");
    }
  });
});

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post("/api/user", urlencodedParser, function (req, res) {
  var Username = req.body.Username;
  var Email = req.body.Email;
  var Role = req.body.Role;
  var Password = req.body.Password;
  user.addUser(Username, Email, Role, Password, function (err, result) {
    if (!err) {
      console.log(result);
      res.send(result + " record inserted");
    } else {
      res.send(err.statusCode);
    }
  });
});

app.delete("/api/user/:Userid", function (req, res) {
  var userid = req.params.Userid;
  user.deleteUser(userid, function (err, result) {
    if (!err) {
      res.send(result + " record deleted");
    } else {
      console.log(err);
      res.status(500).send("Some error");
    }
  });
});

app.put("/api/user/:userid", urlencodedParser, function (req, res) {
  var userid = req.params.userid;
  var email = req.body.email; // Use lowercase 'email' here
  var password = req.body.password; // Use lowercase 'password' here
  user.updateUser(userid, email, password, function (err, result) {
    if (!err) {
      res.send("User record updated");
    } else {
      console.log(err);
      res.status(500).send("Some error");
    }
  });
});

http: module.exports = app;
