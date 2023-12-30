const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");

// Creating server app
const app = express();

// Adding body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Adding routes
app.use("/api/places", placesRoutes);

// Error handler middleware
app.use((error, request, response, next) => {
  if (response.headerSent) {
    return next(error);
  }
  response.status(error.code || 500);
  response.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);
