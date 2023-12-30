const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const uuid = require("uuid").v4;
const getCoordinates = require("../util/location");

let DUMMY_PLACES = [
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

const getPlaceByID = (request, response, next) => {
  const placeID = request.params.placeID;
  const place = DUMMY_PLACES.find((p) => p.id === placeID);

  if (!place) {
    next(new HttpError("Could not find a place for provided id.", 404));
    return;
  }

  response.json({ place });
};

const getPlaceByUserID = (request, response, next) => {
  const userID = request.params.userID;
  const place = DUMMY_PLACES.filter((p) => p.creator === userID);

  if (!place.length) {
    next(new HttpError("Could not find a place for provided user id.", 404));
    return;
  }

  response.json({ place });
};

const addPlace = async (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    next(
      new HttpError(
        "Could not add place, some of the data do not match validation requirements.",
        422
      )
    );
  }
  const { title, description, address, creator } = request.body;

  let coordinates;
  try {
    coordinates = getCoordinates(address);
  } catch (error) {
    return next(error);
  }

  const addedPlace = {
    id: uuid(),
    title,
    description,
    address,
    creator,
    coordinates,
  };
  DUMMY_PLACES.push(addedPlace);
  response.status(201).json({ place: addedPlace });
};

const updatePlace = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    throw new HttpError(
      "Could not update place, some of the data do not match validation requirements.",
      422
    );
  }

  const { title, description } = request.body;
  const placeID = request.params.placeID;

  let updatedPlace = {};
  DUMMY_PLACES.forEach((place) => {
    if (place.id === placeID) {
      place.title = title;
      place.description = description;
      updatedPlace = { place };
    }
  });

  response.json(updatedPlace);
};

const deletePlace = (request, response, next) => {
  const placeID = request.params.placeID;
  if (!DUMMY_PLACES.find((p) => p.id === placeID)) {
    throw new HttpError("Could not find a place with that id.", 404);
  }
  let deletedPlace = {};
  DUMMY_PLACES = DUMMY_PLACES.filter((place) => {
    if (place.id === placeID) {
      deletedPlace = place;
      return false;
    }
    return true;
  });
  response.json({ place: deletedPlace });
};

// exports.getPlaceByID = getPlaceByID;
// exports.getPlaceByUserID = getPlaceByUserID;
// exports.createPlace = createPlace;

module.exports = {
  getPlaceByID,
  getPlaceByUserID,
  addPlace,
  updatePlace,
  deletePlace,
};
