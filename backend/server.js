const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// app.use("/token", (req, res) => {
//   res.send({
//     token: "access",
//   });
// });

const db = mysql.createConnection({
  user: "sql7387743",
  host: "sql7.freemysqlhosting.net",
  password: "TT4IE9AYiI",
  database: "sql7387743",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;

  db.query(
    "INSERT INTO users (id,username,password,firstname,lastname,cart) VALUES (?,?,?,?,?,?)",
    [0, username, password, firstname, lastname, 0],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/cart", (req, res) => {
  const cart = req.body.cart
  const username = req.body.username

  db.query(
    "UPDATE users SET cart = ? WHERE username = ?",
    [cart, username],
    (err, result) => {
      if(err) {
        res.send({err:err})
      };
    }
  );
});

app.post('/getcart', (req,res) => {
  const username = req.body.username;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if(err) {
        res.send({err: err});
      }
      if(result) {
        res.send(result)
      }
    }
  )
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Invalid username or password." });
      }
    }
  );
});

app.listen(9000, () =>
  console.log("API is running on http://localhost:9000/login")
);
