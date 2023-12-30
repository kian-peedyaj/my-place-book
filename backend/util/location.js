const axios = require("axios");
const HttpError = require("../models/http-error");
const API_KEY = "AIzaSyA6b20aFW3-4GFuop8OR5YNhmf67l2pTR4";

const getCoordinates = async (address) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`,
    {
      rejectUnauthorized: false,
    }
  );

  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    throw new HttpError("Could not find location for the address,", 404);
  }

  return data.results[0].geometry.location;
};

module.exports = getCoordinates;
