import React from "react";

import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

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

const UserPlaces = () => {
  const { userID } = useParams();
  const places = DUMMY_PLACES.filter((place) => place.creator === userID);
  return <PlaceList items={places} />;
};

export default UserPlaces;
