const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

let port = process.env.PORT || 9000;

//============Connection==============//
const db = mysql.createConnection({
  user: "sql7387743",
  host: "sql7.freemysqlhosting.net",
  password: "TT4IE9AYiI",
  database: "sql7387743",
});
//============Register==============//
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const cart = JSON.stringify([]);

  db.query(
    "INSERT INTO users (id,username,password,firstname,lastname,cart) VALUES (?,?,?,?,?,?)",
    [0, username, password, firstname, lastname, cart],
    (err, result) => {
      console.log(err);
    }
  );
});
//============Cart update==============//
app.post("/cart", (req, res) => {
  const cart = req.body.cart;
  const username = req.body.username;

  db.query(
    "UPDATE users SET cart = ? WHERE username = ?",
    [cart, username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
    }
  );
});
//============Get items from cart==============//
app.post("/getcart", (req, res) => {
  const username = req.body.username;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
    }
  );
});
//============Login==============//
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

//============Add trees==============//
app.post("/add", (req, res) => {
  const tree_name = req.body.tree_name;
  const tree_description = req.body.tree_description;
  const tree_img = req.body.tree_img;
  const price = req.body.price;
  const country = req.body.country;
  const co2 = req.body.co2;

  db.query(
    "INSERT INTO Trees (tree_name, tree_description, tree_img, price, country, co2) VALUES (?,?,?,?,?,?)",
    [tree_name, tree_description, tree_img, price, country, co2],
    (err) => {
      if (err) {
        res.send({ err: err });
      }
    }
  );
});

//============Get trees==============//
app.post("/getTree", (req, res) => {
  db.query("SELECT * from Trees", (err, result) => {
    if (err) {
      res.send({ err: err });
    } else if (result) {
      res.send(result);
    }
  });
});

//============Run==============//
app.listen(port, () => console.log(`API is running on port ${port}`));
