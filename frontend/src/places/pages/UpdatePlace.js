import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import useForm from "../../shared/hooks/form-hook";

import "../../shared/style/Form.css";

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

const UpdatePlace = () => {
  const [formState, inputChangeHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const { placeID } = useParams();

  const identifiedPlace =
    DUMMY_PLACES.find((place) => place.id === placeID) || {};

  if (!identifiedPlace)
    return (
      <div className="center">
        <h2>Sorry, could not find the place!</h2>
      </div>
    );

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("@@@ formState", formState);
  };

  return (
    <form className="place-form" onSubmit={formSubmit}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputChangeHandler}
        initialValue={identifiedPlace.title}
      />
      <Input
        id="description"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Description should have atleast 5 characters."
        onInput={inputChangeHandler}
        initialValue={identifiedPlace.description}
      />

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
