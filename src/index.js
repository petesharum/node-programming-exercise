const express = require("express");
const db = require("./db");

const port = 3000;
const app = express();

// map static files
app.use(express.json());
app.use(express.static("public"));

// get cart
app.get("/api/cart/", (req, res) => {
  const cart = db.getCart();
  res.set({ "Content-Type": "application/json" }).status(200).json(cart);
});

// put cart
app.put("/api/cart/", (req, res) => {
  var cart = req.cart;
  db.setCart(cart);
  res.status(200).json(cart);
});

// setup server
app.listen(port, () => console.log(`listening on port ${port}!`));
