"use strict";

require('dotenv').config();

// const knex = require("knex")({
//   client: "pg",
//   connection: {
//     user     : process.env.DB_USER,
//     password : process.env.DB_PASS,
//     database : process.env.DB_NAME,
//     host     : process.env.DB_HOST,
//     port     : process.env.DB_PORT,
//     ssl      : process.env.DB_SSL
//   },
// });

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Twilio API
const accountSid = "AC5844c3ec0221d9a8bcdc409ee3ea64b5";
const authToken = "a61917927d79a5f1ad33d27fe296d430";
const client = require('twilio')(accountSid, authToken);

// Seperated Routes for each Resource
const usersRoutes = require("./routes/menu");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/items", usersRoutes(knex));

// <-------------GET ROUTES------------------>

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Menu page for order
app.get("/menu", (req, res) => {
  res.render("menu");
})

// Cart page
app.get("/cart", (req, res) => {
  res.render("cart");
})

// Checkout page
app.get("/checkout", (req, res) => {
  res.render("checkout");
})

// Confirmation page
app.get("/confirm", (req, res) => {
  // Send SMS to customer through Twilio
  // client.messages
  // .create({
  //     body: 'Thank you for your purchase. It will take 30 minutes for the order to be ready.',
  //     from: '+15067990251',
  //     to: '+16476464578'
  // })
  // .then(message => console.log("This is a message for customer :" + message))

  res.render("confirm");
})

// <-------------POST ROUTES------------------>

app.post("/checkout", (req, res) => {
  //   // Send SMS to restaurant through Twilio
  //   client.messages
  //   .create({
  //       body: 'You received a new order. Please check the app for order details.',
  //       from: '+16042659409',
  //       to: '+16477600143'
  //   })
  //   .then(message => console.log("This is a message for restaurant :" + message))
  // res.redirect("/");
})


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});           