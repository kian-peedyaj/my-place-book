import React from "react";

import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import "./PlaceList.css";

const PlaceList = ({ items }) => {
  if (items?.length === 0) {
    return (
      <Card className="place-list center">
        <h2>No places found. Maybe create one?</h2>
        <Button to="/places/new">Share Place</Button>
      </Card>
    );
  }
  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          image={place.imageURL}
          description={place.description}
          address={place.address}
          creator={place.creatorID}
          coordinates={place.coordinates}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
