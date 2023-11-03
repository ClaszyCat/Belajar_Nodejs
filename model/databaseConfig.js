var mysql = require("mysql");

var dbconnect = {
  getConnection: function () {
    var conn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "web_a",
    });
    return conn;
  },
};

module.exports = dbconnect;
