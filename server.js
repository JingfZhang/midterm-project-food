"use strict";

require('dotenv').config();

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
const accountSidRest = "AC5844c3ec0221d9a8bcdc409ee3ea64b5";
const authTokenRest = "efd1859a46d440866a5db285c59ba44a";
const clientRest = require('twilio')(accountSidRest, authTokenRest);

const accountSidCust = "AC3720ee9a4aad3a42b6e5376d78fc2156";
const authTokenCust = "c929bb1400c7a23ad5699119dc920b7c";
const clientCust = require('twilio')(accountSidCust, authTokenCust);

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
  res.render("confirm");
})

// <-------------POST ROUTES------------------>

app.post("/checkout", (req, res) => {

    // Send SMS to restaurant through Twilio
    clientRest.messages
    .create({
        body: 'You received a new order. Please check the app for order details.',
        from: '+15067990251',
        to: '+16476464578'
    })
    .then(message => console.log(message.sid))
    .catch(console.error)
    .done();

    // Send SMS to customer through Twilio
    clientCust.messages
    .create({
        body: 'Thank you for your purchase. It will take 30 minutes for the order to be ready.',
        from: '+16042659409',  
        to: '+16477600143'
    })
    .then(message => console.log(message.sid))
    .catch(console.error)    
    .done();

    req.session = null;
    res.redirect("/confirm");
})


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});           