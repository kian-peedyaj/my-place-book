import React from "react";

import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";

import "./PlaceList.css";

const PlaceList = ({ items }) => {
  if (items?.length === 0) {
    return (
      <Card className="place-list center">
        <h2>No places found. Maybe create one?</h2>
        <button>Share Place</button>
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
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
