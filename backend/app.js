const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

// Creating server app
const app = express();

// Adding body parser middleware
app.use(bodyParser.json());

// Adding routes
app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

// 404 handler middleware
app.use((request, response, next) => {
  throw new HttpError("Could not find the page.", 404);
});

// Error handler middleware
app.use((error, request, response, next) => {
  if (response.headerSent) {
    return next(error);
  }
  response.status(error.code || 500);
  response.json({
    message: error.message || "An unknown error occurred!",
  });
});

app.listen(5000);
