const express = require("express");
const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Taj Mahal",
    imageURL:
      "https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_4x3.jpg",
    description: "The monument is one of the seven wonders of the world.",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    creator: "u1",
    coordinates: {
      lat: 27.1751448,
      lng: 78.0421422,
    },
  },
  {
    id: "p2",
    title: "Taj Mahal",
    imageURL:
      "https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_4x3.jpg",
    description: "The monument is one of the seven wonders of the world.",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    creator: "u2",
    coordinates: {
      lat: 27.1751448,
      lng: 78.0421422,
    },
  },
];

router.get("/:placeID", (request, response, next) => {
  const placeID = request.params.placeID;
  const place = DUMMY_PLACES.find((p) => p.id === placeID);

  if (!place) {
    const error = new Error("Could not find a place for provided id.");
    error.code = 404;
    next(error);
    return;
  }

  response.json({ place });
});

router.get("/user/:userID", (request, response, next) => {
  const userID = request.params.userID;
  const place = DUMMY_PLACES.filter((p) => p.creator === userID);

  if (!place.length) {
    const error = new Error("Could not find a place for provided user id.");
    error.code = 404;
    next(error);
    return;
  }

  response.json({ place });
});

module.exports = router;
