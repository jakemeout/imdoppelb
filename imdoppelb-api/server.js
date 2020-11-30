const express = require('express');
const logger = require('morgan');
const bodyParser = require("body-parser");
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);




// Log requests to the console.
app.use(logger('dev'));


// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// allow CORS
app.use(cors());
// simple route
app.get("/", (req, res) => {
  res.json({ message: "IMDoppelB!" });
});

console.log('IMDoppelB REST API: ' + port);
