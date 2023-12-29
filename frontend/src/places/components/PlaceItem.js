import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

import "./PlaceItem.css";

const PlaceItem = ({ id, image, title, address, description, coordinates }) => {
  const [showMap, setShowMap] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const openDeleteConfirmHandler = () => setShowDeleteConfirmModal(true);
  const closeDeleteConfirmHandler = () => setShowDeleteConfirmModal(false);

  const deleteItemHandler = () => {
    //Code to delete
    // ...
    closeDeleteConfirmHandler();
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={coordinates} zoom={15} />
        </div>
      </Modal>
      <Modal
        show={showDeleteConfirmModal}
        onCancel={closeDeleteConfirmHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={closeDeleteConfirmHandler}>
              Cancel
            </Button>
            <Button danger onClick={deleteItemHandler}>
              Delete
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={image} alt={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger onClick={openDeleteConfirmHandler}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
