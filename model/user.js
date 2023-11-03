var db = require("./databaseconfig.js");
var userDB = {
  //Memunculkan User dengan User ID
  getUser: function (Userid, callback) {
    var conn = db.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        console.log("Connected!");
        var sql = "SELECT * FROM user WHERE userid = ?";
        conn.query(sql, [Userid], function (err, result) {
          conn.end();
          if (err) {
            console.log(err);
            return callback(err, null);
          } else {
            return callback(null, result);
          }
        });
      }
    });
  },

  getUsers: function (callback) {
    var conn = db.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        console.log("Connected!");
        var sql = "SELECT * FROM user";
        conn.query(sql, function (err, result) {
          conn.end();
          if (err) {
            console.log(err);
            return callback(err, null);
          } else {
            return callback(null, result);
          }
        });
      }
    });
  },

  addUser: function (Username, Email, Role, Password, callback) {
    var conn = db.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        console.log("Connected!");
        var sql =
          "Insert into user(Username,Email,Role,Password) values(?,?,?,?)";
        // var sql = "Update user set email=?,password=? //where userid=?";
        conn.query(
          sql,
          [Username, Email, Role, Password],
          function (err, result) {
            conn.end();
            if (err) {
              console.log(err);
              return callback(err, null);
            } else {
              console.log(result.affectedRows);

              return callback(null, result.affectedRows);
            }
          }
        );
      }
    });
  },

  deleteUser: function (Userid, callback) {
    var conn = db.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        console.log("Connected!");
        var sql = "DELETE FROM user WHERE userid = ?";
        conn.query(sql, [Userid], function (err, result) {
          conn.end();
          if (err) {
            console.log(err);
            return callback(err, null);
          } else {
            return callback(null, result);
          }
        });
      }
    });
  },

  updateUser: function (Userid, Email, Password, callback) {
    var conn = db.getConnection();
    var sql = "UPDATE user SET Email=?, Password=? WHERE userid=?";
    conn.connect(function (err) {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        conn.query(sql, [Email, Password, Userid], function (err, result) {
          conn.end(); // Close the connection when the query is done
          if (err) {
            console.error("Error updating user:", err);
            callback(err, null);
          } else {
            console.log("User updated successfully.");
            callback(null, result);
          }
        });
      }
    });
  },
};

module.exports = userDB;
